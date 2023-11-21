import { Collection, Db } from 'mongodb';
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
}
