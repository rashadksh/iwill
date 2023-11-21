import { Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import MongodbProvider from './mongodb.provider';
import { MongoTodoRepository } from './repositories/todo-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [ConfigService, MongodbProvider, MongoTodoRepository],
  exports: [ConfigService, MongodbProvider, MongoTodoRepository],
})
export class InfraModule {}
