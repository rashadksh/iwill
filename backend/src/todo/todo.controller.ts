import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';

import { CreateTodoDTO, UpdateTodoDTO } from '@iwill/lib/types';
import {
  createTodoValidationSchema,
  updateTodoValidationSchema,
} from '@iwill/lib/validations';

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
  @HttpCode(201)
  async createTodo(@Body() body: CreateTodoDTO) {
    const todo = await this.todoService.createTodo(body);
    return TodoMapper.dbToJSON(todo);
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(updateTodoValidationSchema))
  @HttpCode(202)
  async updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDTO) {
    const todo = await this.todoService.updateTodo(id, body);
    return TodoMapper.dbToJSON(todo);
  }
}
