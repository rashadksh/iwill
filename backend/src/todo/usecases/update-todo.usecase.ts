import {
  UpdateTodoDTO,
  TodoEntity,
  TodoRepository,
  Usecase,
} from '@iwill/lib/types';

export class UpdateTodosUsecase
  implements Usecase<UpdateTodoDTO, Promise<TodoEntity>>
{
  constructor(private todoRepository: TodoRepository) {}

  async execute(input: UpdateTodoDTO & { id: string }): Promise<TodoEntity> {
    const data: Partial<TodoEntity> = { ...input };

    if (input.isComplete === false) {
      data.completedAt = null;
    }

    if (input.isComplete) {
      data.completedAt = new Date();
    }

    const todo = await this.todoRepository.updateTodoById(input.id, data);
    return todo;
  }
}
