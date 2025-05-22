import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class NanoidService {
  public generate(): string {
    return nanoid();
  }
}
