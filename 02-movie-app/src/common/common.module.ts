import { Module } from '@nestjs/common';
import { NanoidService } from './services/nanoid.service';

@Module({
  providers: [NanoidService],
  exports: [NanoidService],
})
export class CommonModule {}
