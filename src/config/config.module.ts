import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
