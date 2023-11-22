import * as Joi from 'joi';

export const createTodoValidationSchema = Joi.object({
  title: Joi.string().min(1).max(250).required(),
  description: Joi.string().min(1).max(1024).required(),
}).required();

export const updateTodoValidationSchema = Joi.object({
  title: Joi.string().min(1).max(250).optional(),
  description: Joi.string().min(1).max(1024).optional(),
  isComplete: Joi.boolean().optional(),
}).required();
