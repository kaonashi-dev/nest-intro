import { Module, UsePipes, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CommonModule } from './common/common.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public')
    }),


    MongooseModule.forRoot('mongodb://localhost:27017/nest-movie-app'),

    CommonModule,
    MovieModule

  ],
  controllers: [],
  providers: [],
})
@UsePipes(ValidationPipe)

export class AppModule { }
