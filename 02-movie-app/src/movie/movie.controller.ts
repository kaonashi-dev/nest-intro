import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.movieService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.movieService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(term, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.movieService.remove(id);
  }
}
