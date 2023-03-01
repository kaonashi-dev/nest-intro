import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

	private readonly logger = new Logger('ProductsService');

	constructor(
		@InjectRepository(Product)
		private readonly productRepository: Repository<Product>

	) {

	}

	async create(createProductDto: CreateProductDto) {

		try {

			const product = this.productRepository.create(createProductDto);
			await this.productRepository.save(product);

			return product;

		} catch (error) {
			this.handleDBException(error);
		}

	}

	findAll() {
		const products = this.productRepository.find();
		return products;
	}

	async findOne(id: string) {
		const product = this.productRepository.findOneBy({ id });
		if (!product) throw new BadRequestException(`Not found ${id}`);
		return product;
	}

	update(id: number, updateProductDto: UpdateProductDto) {
		return `This action updates a #${id} product`;
	}

	async remove(id: string) {

		const product = await this.findOne(id);
		await this.productRepository.remove(product);

	}

	private handleDBException(error: any) {
		if (error.code === '23505')
			throw new BadRequestException(error.detail);

		this.logger.error(error);
		throw new InternalServerErrorException('Unexpected error');
	}
}
