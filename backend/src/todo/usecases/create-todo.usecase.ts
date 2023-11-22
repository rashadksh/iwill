import {
  CreateTodoDTO,
  TodoEntity,
  TodoRepository,
  Usecase,
} from '@iwill/lib/types';

export class CreateTodosUsecase
  implements Usecase<CreateTodoDTO, Promise<TodoEntity>>
{
  constructor(private todoRepository: TodoRepository) {}

  execute(input: CreateTodoDTO): Promise<TodoEntity> {
    const todo = this.todoRepository.insertTodo({
      title: input.title,
      description: input.description,
      completedAt: null,
      isComplete: false,
      createdAt: new Date(),
    });

    return todo;
  }
}
