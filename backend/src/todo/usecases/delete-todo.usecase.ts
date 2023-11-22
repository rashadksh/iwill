import { TodoRepository, Usecase } from '@iwill/lib/types';

export class DeleteTodosUsecase implements Usecase<string, void> {
  constructor(private todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    await this.todoRepository.deleteTodoById(id);
    return;
  }
}
