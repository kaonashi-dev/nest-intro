import { Module } from '@nestjs/common';
import { NanoidService } from './services/nanoid.service';
import { NanoidController } from './controllers/nanoid.controller';

@Module({
  providers: [NanoidService],
  exports: [NanoidService],
  controllers: [NanoidController],
})
export class CommonModule {}
