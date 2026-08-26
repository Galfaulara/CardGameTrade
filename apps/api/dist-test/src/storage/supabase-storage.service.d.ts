import { ConfigService } from "@nestjs/config";
import { StorageService, UploadObjectInput } from "./storage.service";
export declare class SupabaseStorageService extends StorageService {
    private readonly config;
    readonly provider = "supabase";
    private readonly client;
    private readonly bucket;
    constructor(config: ConfigService);
    upload(input: UploadObjectInput): Promise<void>;
    remove(key: string): Promise<void>;
    createSignedUrl(key: string, expiresInSeconds?: number): Promise<string>;
}
//# sourceMappingURL=supabase-storage.service.d.ts.map