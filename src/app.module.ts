import { Module, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
@UsePipes(ValidationPipe)

export class AppModule { }
