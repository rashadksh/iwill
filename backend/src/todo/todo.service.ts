import { Injectable } from '@nestjs/common';

import { MongoTodoRepository } from '../infra/repositories/todo-repository';
import { GetTodosUsecase } from './usecases/get-todos.usecase';

@Injectable()
export class TodoService {
  constructor(private todoRepository: MongoTodoRepository) {}

  getTodos() {
    const getTodosUsecase = new GetTodosUsecase(this.todoRepository);
    return getTodosUsecase.execute();
  }
}
