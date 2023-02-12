import { v5 as uuid } from 'uuid';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
import { Car } from "src/cars/interface/car.interface";

export const CARS_SEED: Car[] = [
   {
      id: uuid('Toyota-1', MY_NAMESPACE),
      brand: 'Toyota 1',
      model: 'Model 1'
   },
   {
      id: uuid('Toyota-2', MY_NAMESPACE),
      brand: 'Toyota 2',
      model: 'Model 2'
   },
   {
      id: uuid('Toyota-3', MY_NAMESPACE),
      brand: 'Toyota 3',
      model: 'Model 3'
   }
];