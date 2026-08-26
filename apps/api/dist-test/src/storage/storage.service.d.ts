export interface UploadObjectInput {
    key: string;
    buffer: Buffer;
    contentType: string;
}
export declare abstract class StorageService {
    abstract readonly provider: string;
    abstract upload(input: UploadObjectInput): Promise<void>;
    abstract remove(key: string): Promise<void>;
    abstract createSignedUrl(key: string, expiresInSeconds?: number): Promise<string>;
}
//# sourceMappingURL=storage.service.d.ts.map