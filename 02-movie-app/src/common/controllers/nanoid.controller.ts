import { Controller, Get } from '@nestjs/common';
import { NanoidService } from '../services/nanoid.service';

@Controller('nanoid')
export class NanoidController {
  constructor(private readonly nanoidService: NanoidService) {}

  @Get()
  generateNanoId(): string {
    return this.nanoidService.generate();
  }
}
