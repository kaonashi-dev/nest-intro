import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {

   @PrimaryColumn('uuid')
   id: string;

   @Column({
      type: 'text',
      unique: true,
   })
   title: string;

   @Column({
      type: 'numeric',
      default: 0
   })
   price: number;

   @Column({
      type: 'text',
      nullable: true
   })
   description: string;

   @Column({
      unique: true,
      type: 'text',
   })
   slot: string;

   @Column({
      unique: true,
      type: 'numeric',
      default: 0,
   })
   stock: number;

   @Column({
      type: 'text',
      array: true
   })
   sizes: string[];

   @Column({
      type: 'text',
   })
   gender: string; 

}
