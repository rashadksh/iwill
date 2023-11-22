import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
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
import { IWillHttpError } from '../lib/errors/http-errors';
import { TodoService } from './todo.service';
import { TodoMapper } from './todo.mapper';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodos() {
    try {
      const todoEntities = await this.todoService.getTodos();
      return { todos: TodoMapper.dbToJSONBulk(todoEntities) };
    } catch (e) {
      Logger.error(`Failed getting todos - ${e}`);
      IWillHttpError.throwHttpErrorFromIWillError(e);
    }
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(createTodoValidationSchema))
  @HttpCode(201)
  async createTodo(@Body() body: CreateTodoDTO) {
    try {
      const todo = await this.todoService.createTodo(body);
      return TodoMapper.dbToJSON(todo);
    } catch (e) {
      Logger.error(`Failed creating new todo - ${e}`);
      IWillHttpError.throwHttpErrorFromIWillError(e);
    }
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(updateTodoValidationSchema))
  @HttpCode(202)
  async updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDTO) {
    try {
      const todo = await this.todoService.updateTodo(id, body);
      return TodoMapper.dbToJSON(todo);
    } catch (e) {
      Logger.error(`Failed updating todo of id ${id} - ${e}`);
      IWillHttpError.throwHttpErrorFromIWillError(e);
    }
  }
}
