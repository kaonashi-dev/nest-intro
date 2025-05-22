import { Test, TestingModule } from '@nestjs/testing';
import { NanoidService } from './nanoid.service';

describe('NanoidService', () => {
  let service: NanoidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NanoidService],
    }).compile();

    service = module.get<NanoidService>(NanoidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a string ID', () => {
    const id = service.generate();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
    expect(id.length).toBe(21); // Default length for nanoid
  });
});
