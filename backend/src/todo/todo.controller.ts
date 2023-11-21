import { Controller, Get } from '@nestjs/common';

import { TodoService } from './todo.service';
import { TodoMapper } from './todo.mapper';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodos() {
    const todoEntities = await this.todoService.getTodos();
    return { todos: TodoMapper.dbToJSONBulk(todoEntities) };
  }
}
