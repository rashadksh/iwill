import { FactoryProvider, Logger } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';

import { ConfigService } from './config.service';
import { DI_VARIABLES } from '../di';

const provider: FactoryProvider = {
  provide: DI_VARIABLES.DB,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const client = new MongoClient(configService.getMongoConnectionString(), {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    Logger.log('Connected to databse');
    return client.db(configService.getMongoDatabaseName());
  },
};

export default provider;
