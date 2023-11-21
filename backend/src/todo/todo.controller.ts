import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';

import { CreateTodoDTO } from '@iwill/lib/types';
import { createTodoValidationSchema } from '@iwill/lib/validations';

import { JoiValidationPipe } from '../lib/validation.pipe';
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

  @Post('/')
  @UsePipes(new JoiValidationPipe(createTodoValidationSchema))
  async createTodo(@Body() body: CreateTodoDTO) {
    const todo = await this.todoService.createTodo(body);
    return TodoMapper.dbToJSON(todo);
  }
}
