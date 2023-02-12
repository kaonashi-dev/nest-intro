import { v5 as uuid } from 'uuid';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
   {
      id: uuid('Toyota-1', MY_NAMESPACE),
      name: 'Toyota 1',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
   },
   {
      id: uuid('Toyota-2', MY_NAMESPACE),
      name: 'Toyota 2',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
   },
   {
      id: uuid('Toyota-3', MY_NAMESPACE),
      name: 'Toyota 3',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
   },
];