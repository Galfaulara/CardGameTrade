"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseStorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const supabase_js_1 = require("@supabase/supabase-js");
const storage_service_1 = require("./storage.service");
let SupabaseStorageService = class SupabaseStorageService extends storage_service_1.StorageService {
    config;
    provider = "supabase";
    client;
    bucket;
    constructor(config) {
        super();
        this.config = config;
        const url = this.config.getOrThrow("SUPABASE_URL");
        const secretKey = this.config.getOrThrow("SUPABASE_SECRET_KEY");
        this.bucket =
            this.config.getOrThrow("SUPABASE_STORAGE_BUCKET");
        this.client = (0, supabase_js_1.createClient)(url, secretKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
            },
        });
    }
    async upload(input) {
        const { error, } = await this.client.storage
            .from(this.bucket)
            .upload(input.key, input.buffer, {
            contentType: input.contentType,
            upsert: false,
        });
        if (error) {
            throw new common_1.InternalServerErrorException(`Storage upload failed: ${error.message}`);
        }
    }
    async remove(key) {
        const { error, } = await this.client.storage
            .from(this.bucket)
            .remove([key]);
        if (error) {
            throw new common_1.InternalServerErrorException(`Storage deletion failed: ${error.message}`);
        }
    }
    async createSignedUrl(key, expiresInSeconds = 3600) {
        const { data, error, } = await this.client.storage
            .from(this.bucket)
            .createSignedUrl(key, expiresInSeconds);
        if (error ||
            !data?.signedUrl) {
            throw new common_1.InternalServerErrorException(`Could not create signed photo URL: ${error?.message ??
                "unknown storage error"}`);
        }
        return data.signedUrl;
    }
};
exports.SupabaseStorageService = SupabaseStorageService;
exports.SupabaseStorageService = SupabaseStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SupabaseStorageService);
