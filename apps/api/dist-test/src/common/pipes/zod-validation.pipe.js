"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class ZodValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        const result = this.schema.safeParse(value);
        if (!result.success) {
            throw new common_1.BadRequestException({
                message: "Validation failed",
                errors: result.error.issues.map((issue) => ({
                    path: issue.path.join("."),
                    message: issue.message,
                    code: issue.code,
                })),
            });
        }
        return result.data;
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
