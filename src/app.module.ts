import { Module, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: []
})
@UsePipes(ValidationPipe)

export class AppModule { }
