import {
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  createClient,
  SupabaseClient,
} from "@supabase/supabase-js";

import {
  StorageService,
  UploadObjectInput,
} from "./storage.service";

@Injectable()
export class SupabaseStorageService
  extends StorageService
{
  readonly provider = "supabase";

  private readonly client: SupabaseClient;
  private readonly bucket: string;

  constructor(
    private readonly config: ConfigService,
  ) {
    super();

    const url =
      this.config.getOrThrow<string>(
        "SUPABASE_URL",
      );

    const secretKey =
      this.config.getOrThrow<string>(
        "SUPABASE_SECRET_KEY",
      );

    this.bucket =
      this.config.getOrThrow<string>(
        "SUPABASE_STORAGE_BUCKET",
      );

    this.client = createClient(
      url,
      secretKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );
  }

  async upload(
    input: UploadObjectInput,
  ): Promise<void> {
    const {
      error,
    } = await this.client.storage
      .from(this.bucket)
      .upload(
        input.key,
        input.buffer,
        {
          contentType:
            input.contentType,
          upsert: false,
        },
      );

    if (error) {
      throw new InternalServerErrorException(
        `Storage upload failed: ${error.message}`,
      );
    }
  }

  async remove(
    key: string,
  ): Promise<void> {
    const {
      error,
    } = await this.client.storage
      .from(this.bucket)
      .remove([key]);

    if (error) {
      throw new InternalServerErrorException(
        `Storage deletion failed: ${error.message}`,
      );
    }
  }

  async createSignedUrl(
    key: string,
    expiresInSeconds = 3600,
  ): Promise<string> {
    const {
      data,
      error,
    } = await this.client.storage
      .from(this.bucket)
      .createSignedUrl(
        key,
        expiresInSeconds,
      );

    if (
      error ||
      !data?.signedUrl
    ) {
      throw new InternalServerErrorException(
        `Could not create signed photo URL: ${
          error?.message ??
          "unknown storage error"
        }`,
      );
    }

    return data.signedUrl;
  }
}