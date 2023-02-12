import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

   @IsString({message: 'Brand is string :('})
   readonly brand: string;

   @IsString()
   @MinLength(3)
   readonly model: string;
}