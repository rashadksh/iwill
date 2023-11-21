import { Schema, ValidationError } from 'joi';
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  async transform(value: any) {
    try {
      await this.schema.validateAsync(value, {
        abortEarly: false,
      });
      return value;
    } catch (e) {
      const formattedError = this.formatError(e);
      throw new BadRequestException(formattedError);
    }
  }

  formatError(e: ValidationError) {
    return e.details.map((item) => ({
      [item.path[0]]: item.message,
    }));
  }
}
