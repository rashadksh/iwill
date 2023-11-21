import { Module } from '@nestjs/common';

import { TodoController } from './todo.controller';
import { InfraModule } from '../infra/infra.module';
import { TodoService } from './todo.service';

@Module({
  imports: [InfraModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
