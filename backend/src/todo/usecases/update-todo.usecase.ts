import {
  UpdateTodoDTO,
  TodoEntity,
  TodoRepository,
  Usecase,
} from '@iwill/lib/types';

import { TodoNotFoundError } from '../../lib/errors/todo-errors';

export class UpdateTodosUsecase
  implements Usecase<UpdateTodoDTO, Promise<TodoEntity>>
{
  constructor(private todoRepository: TodoRepository) {}

  async execute(input: UpdateTodoDTO & { id: string }): Promise<TodoEntity> {
    const todo = await this.todoRepository.getTodoById(input.id);
    if (!todo) {
      throw new TodoNotFoundError();
    }

    const updateDTO = this.buildUpdateDTO(input);
    const updatedTodo = await this.todoRepository.updateTodoById(
      input.id,
      updateDTO,
    );
    return updatedTodo;
  }

  private buildUpdateDTO(input: UpdateTodoDTO): Partial<TodoEntity> {
    const data: Partial<TodoEntity> = { ...input };
    if (input.isComplete === false) {
      data.completedAt = null;
    }
    if (input.isComplete) {
      data.completedAt = new Date();
    }
    return data;
  }
}
