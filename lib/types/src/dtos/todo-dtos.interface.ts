export interface CreateTodoDTO {
  title: string;
  description: string;
}

export interface UpdateTodoDTO {
  title?: string;
  description?: string;
  isComplete?: boolean;
}
