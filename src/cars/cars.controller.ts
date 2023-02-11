import {
   Body, Controller, Delete, Get, Param,
   ParseIntPipe, ParseUUIDPipe,
   Patch, Post,
} from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { CarsService } from './cars.service';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

   constructor(
      private readonly carsService: CarsService
   ) { }

   @Get()
   getAllCars() {
      return this.carsService.findAll();
   }

   @Get(':id')
   getCarById(@Param('id', ParseUUIDPipe) id) {
      return this.carsService.findOneById(id);
   }

   @Post()
   createCar(@Body() createCarDto: CreateCarDto) {
      const newCar = this.carsService.create(createCarDto);
      return newCar;
   }

   @Patch(':id')
   updateCar(@Param('id', ParseUUIDPipe) id, @Body() updateCarDto: UpdateCarDto) {
      const updatedCar = this.carsService.update(id, updateCarDto);
      return updatedCar;
   }

   @Delete(':id')
   deleteCar(@Param('id', ParseUUIDPipe) id) {
      this.carsService.delete(id);
   }

}
