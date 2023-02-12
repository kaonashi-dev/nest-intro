import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public')
    }),
    MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
