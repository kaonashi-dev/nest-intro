import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Movie } from 'src/movie/entities/movie.entity';
import { MOVIES_SEED } from './data/movie.seed';

@Injectable()
export class SeedService {

	constructor(
		@InjectModel(Movie.name)
		private readonly movieModel: Model<Movie>
	) { }

	async executeSeed() {

		await this.movieModel.insertMany(MOVIES_SEED);
		return `Seed executed`;

	}

}
