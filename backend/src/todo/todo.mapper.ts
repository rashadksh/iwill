import { TodoEntity, TodoModel } from '@iwill/lib/types';

export class TodoMapper {
  static dbToJSON(todo: TodoEntity): TodoModel {
    return {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      completedAt: todo.completedAt,
      isComplete: todo.isComplete,
      createdAt: todo.createdAt,
    };
  }

  static dbToJSONBulk(todos: TodoEntity[]): TodoModel[] {
    return todos.map(TodoMapper.dbToJSON);
  }
}
