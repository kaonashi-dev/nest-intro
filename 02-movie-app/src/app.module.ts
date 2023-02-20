import { Module, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { EnvConfiguration } from './config/env.config';
import { JoiValidation } from './config/joi.validation';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidation
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public')
    }),

    MongooseModule.forRoot(process.env.MONGODB),

    CommonModule,
    SeedModule,
    MovieModule

  ],
  controllers: [],
  providers: [],
})
@UsePipes(ValidationPipe)

export class AppModule { }
