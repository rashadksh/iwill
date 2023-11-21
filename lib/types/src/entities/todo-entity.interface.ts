export interface TodoEntity {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
  createdAt: Date;
  completedAt: Date;
}
