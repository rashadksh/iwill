import { IWillError } from '.';

export class TodoNotFoundError extends IWillError {
  constructor() {
    super('Todo not found');
  }
}
