import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({
      type: 'text',
      unique: true,
   })
   title: string;

   @Column({
      type: 'float',
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
   slug: string;

   @Column({
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

   @BeforeInsert()
   checkSlugInsert() {
      if (!this.slug) this.slug = this.title;

      this.slug = this.slug
         .toLowerCase()
         .replaceAll(' ', '-')
         .replaceAll("'", '')
   }

}
