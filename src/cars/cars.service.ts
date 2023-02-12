import { Injectable, NotFoundException } from '@nestjs/common';
import { v5 as uuid } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './dto';

import { Car } from './interface/car.interface';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

@Injectable()
export class CarsService {

   private cars: Array<Car> = [
      // {
      //    id: uuid('Toyota', MY_NAMESPACE),
      //    brand: 'Toyota',
      //    model: 'Corolla'
      // }
   ];

   public findAll() {
      return this.cars;
   }

   public findOneById(id: string) {
      const car = this.cars.find(car => car.id == id);

      if (!car) throw new NotFoundException(`Car with id ${id} not found`);

      return car;
   }

   create(createCarDto: CreateCarDto) {
      const car = {
         id: uuid(createCarDto.model, MY_NAMESPACE),
         ...createCarDto
      }
      this.cars.push(car);
      return car;
   }

   update(id: string, updateCarDto: UpdateCarDto) {
      let carDB = this.findOneById(id);
      this.cars = this.cars.map(car => {

         if (car.id === id) {
            carDB = {
               ...carDB,
               ...updateCarDto,
               id,
            }
            return carDB;
         }

         return car;

      });

      return carDB;
   }

   delete(id: string) {
      let carDB = this.findOneById(id);
      this.cars = this.cars.filter((car) => car.id != id);
      return carDB;
   }

}
