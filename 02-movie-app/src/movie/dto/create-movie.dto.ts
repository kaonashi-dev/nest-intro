import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateMovieDto {

   @IsInt()
   @IsPositive()
   @Min(1)
   no: number;

   @IsString()
   @MinLength(5)
   name: string;

}
