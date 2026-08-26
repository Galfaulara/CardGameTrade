import { PipeTransform } from "@nestjs/common";
import type { ZodTypeAny } from "@repo/validation";
export declare class ZodValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: ZodTypeAny);
    transform(value: unknown): any;
}
//# sourceMappingURL=zod-validation.pipe.d.ts.map