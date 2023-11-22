import { Collection, Db, ObjectId } from 'mongodb';
import { Inject, Injectable } from '@nestjs/common';

import { TodoEntity, TodoRepository } from '@iwill/lib/types';

import { DI_VARIABLES } from '../../di';

@Injectable()
export class MongoTodoRepository implements TodoRepository {
  private collection: Collection<TodoEntity>;

  constructor(@Inject(DI_VARIABLES.DB) db: Db) {
    this.collection = db.collection('todos');
  }

  getTodos(): Promise<TodoEntity[]> {
    return this.collection.find().toArray();
  }

  async insertTodo(input: Omit<TodoEntity, '_id'>): Promise<TodoEntity> {
    const { insertedId } = await this.collection.insertOne({
      _id: new ObjectId().toHexString(),
      ...input,
    });

    return this.getTodoById(insertedId);
  }

  async updateTodoById(
    id: string,
    data: Partial<TodoEntity>,
  ): Promise<TodoEntity> {
    await this.collection.updateOne(
      { _id: id },
      {
        $set: data,
      },
    );

    return this.getTodoById(id);
  }

  getTodoById(id: string): Promise<TodoEntity> {
    return this.collection.findOne({ _id: id });
  }

  deleteTodoById(id: string): Promise<void> {
    this.collection.deleteOne({ _id: id });
    return;
  }
}
