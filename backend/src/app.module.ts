import { Module } from '@nestjs/common';

import { TodoModule } from './todo/todo.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [InfraModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
