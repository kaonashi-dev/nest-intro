import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Movie extends Document {

   @Prop({
      unique: true,
      index:true,
   })
   name: string;

   @Prop({
      unique: true,
      index:true
   })
   no: string;

}

export const MovieSchema = SchemaFactory.createForClass(Movie);
