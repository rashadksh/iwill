import * as Joi from 'joi';

export const createTodoValidationSchema = Joi.object({
  title: Joi.string().min(1).max(250).required(),
  description: Joi.string().min(1).max(1024).required(),
}).required();
