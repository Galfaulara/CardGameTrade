import { Module } from "@nestjs/common";

import { StorageService } from "./storage.service";
import { SupabaseStorageService } from "./supabase-storage.service";

@Module({
  providers: [
    SupabaseStorageService,
    {
      provide: StorageService,
      useExisting: SupabaseStorageService,
    },
  ],
  exports: [
    StorageService,
  ],
})
export class StorageModule {}