import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {

	constructor(
		@InjectModel(Movie.name)
		private readonly movieModel: Model<Movie>
	) { }

	async create(createMovieDto: CreateMovieDto) {

		try {
			const movie = await this.movieModel.create(createMovieDto);
			return movie;
		} catch (error) {
			this.handleExceptions(error);
		}

	}

	findAll(paginationDto: PaginationDto) {

		const { limit = 5, offset = 0 } = paginationDto;

		return this.movieModel.find()
			.limit(limit)
			.skip(offset);
	}

	async findOne(term: string) {

		let movie: Movie;

		if (!isNaN(+1)) {
			movie = await this.movieModel.findOne({ no: term });
		}

		if (!movie && isValidObjectId(term)) {
			movie = await this.movieModel.findById(term);
		}

		if (!movie) {
			movie = await this.movieModel.findOne({ name: term });
		}

		if (!movie) throw new NotFoundException('Movie not found');

		return movie;
	}

	async update(term: string, updateMovieDto: UpdateMovieDto) {

		const movie = await this.findOne(term);

		try {
			await movie.updateOne(updateMovieDto, { new: true });
			return { ...movie.toJSON(), ...updateMovieDto };
		} catch (error) {
			this.handleExceptions(error);
		}


	}

	async remove(id: string) {
		// const movie = await this.findOne(id);
		// await movie.deleteOne();

		// const response = await this.movieModel.findByIdAndDelete(id);

		const { deletedCount } = await this.movieModel.deleteOne({ _id: id });

		if (deletedCount === 0)
			throw new BadRequestException('Movie not found');

		return deletedCount;

	}

	private handleExceptions(error: any) {
		if (error.code == 11000)
			throw new BadRequestException(`Moview exists: ${JSON.stringify(error.keyValue)}`);

		throw new InternalServerErrorException("Can't create movie");
	}
}
