import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { IWillError } from '.';
import { TodoNotFoundError } from './todo-errors';

export abstract class IWillHttpError {
  static throwHttpErrorFromIWillError(error: IWillError) {
    if (error instanceof TodoNotFoundError) {
      throw new NotFoundException();
    }

    throw new InternalServerErrorException();
  }
}
