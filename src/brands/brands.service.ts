import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v5 as uuid } from 'uuid';
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid('Toyota', MY_NAMESPACE),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    //   updatedAt: new Date().getTime(),
    // }
  ];

  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid('Toyota', MY_NAMESPACE),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    }
    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(car => {

      if (car.id === id) {
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          id,
        }
        return brandDB;
      }

      return car;

    });

    return brandDB;
  }

  remove(id: string) {
    let carDB = this.findOne(id);
    this.brands = this.brands.filter((car) => car.id != id);
    return carDB;
  }
}
