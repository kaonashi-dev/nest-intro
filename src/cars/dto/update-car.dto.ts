import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

   @IsString({message: 'Uuiud is string :('})
   @IsUUID()
   @IsOptional()
   readonly id?: string;
   
   @IsString({message: 'Brand is string :('})
   @IsOptional()
   readonly brand?: string;
   
   @IsString()
   @MinLength(3)
   @IsOptional()
   readonly model?: string;
}