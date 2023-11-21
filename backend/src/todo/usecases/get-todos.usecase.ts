import { TodoEntity, TodoRepository, Usecase } from '@iwill/lib/types';

export class GetTodosUsecase implements Usecase<void, Promise<TodoEntity[]>> {
  constructor(private todoRepository: TodoRepository) {}

  execute(): Promise<TodoEntity[]> {
    return this.todoRepository.getTodos();
  }
}
