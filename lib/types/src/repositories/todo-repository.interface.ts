import { TodoEntity } from '../entities/todo-entity.interface';

export interface TodoRepository {
  getTodos(): Promise<TodoEntity[]>;
  insertTodo(input: Omit<TodoEntity, '_id'>): Promise<TodoEntity>;
  getTodoById(id: string): Promise<TodoEntity>;
  updateTodoById(id: string, data: Partial<TodoEntity>): Promise<TodoEntity>;
}
