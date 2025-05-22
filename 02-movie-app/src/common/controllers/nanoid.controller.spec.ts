import { Test, TestingModule } from '@nestjs/testing';
import { NanoidController } from './nanoid.controller';
import { NanoidService } from '../services/nanoid.service';

describe('NanoidController', () => {
  let controller: NanoidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NanoidController],
      providers: [NanoidService],
    }).compile();

    controller = module.get<NanoidController>(NanoidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a nano ID string', () => {
    const id = controller.generateNanoId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(21);
  });
});
