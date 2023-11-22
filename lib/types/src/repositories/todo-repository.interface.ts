import { TodoEntity } from '../entities/todo-entity.interface';

export interface TodoRepository {
  getTodos(): Promise<TodoEntity[]>;
  insertOne(input: Omit<TodoEntity, '_id'>): Promise<TodoEntity>;
  getTodoById(id: string): Promise<TodoEntity>;
  updateOne(id: string, data: Partial<TodoEntity>): Promise<TodoEntity>;
}
