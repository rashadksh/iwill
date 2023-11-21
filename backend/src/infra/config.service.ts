import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getMongoConnectionString(): string {
    return process.env.MONGO_CONNECTION_STRING;
  }

  getMongoDatabaseName(): string {
    return process.env.MONGO_DATABASE_NAME;
  }
}
