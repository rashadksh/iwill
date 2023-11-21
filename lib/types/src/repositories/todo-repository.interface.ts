import { TodoEntity } from '../entities/todo-entity.interface';

export interface TodoRepository {
  getTodos(): Promise<TodoEntity[]>;
}
