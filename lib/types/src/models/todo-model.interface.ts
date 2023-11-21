import { TodoEntity } from '../entities/todo-entity.interface';

export type TodoModel = Omit<TodoEntity, '_id'> & {
  id: string;
};
