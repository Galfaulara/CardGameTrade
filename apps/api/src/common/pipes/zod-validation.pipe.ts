import {
  BadRequestException,
  PipeTransform,
} from "@nestjs/common";
import type { ZodTypeAny } from "@repo/validation";

export class ZodValidationPipe implements PipeTransform {
  constructor(
    private readonly schema: ZodTypeAny,
  ) {}

  transform(value: unknown) {
    const result =
      this.schema.safeParse(value);

    if (!result.success) {
      throw new BadRequestException({
        message: "Validation failed",
        errors: result.error.issues.map(
          (issue) => ({
            path: issue.path.join("."),
            message: issue.message,
            code: issue.code,
          }),
        ),
      });
    }

    return result.data;
  }
}