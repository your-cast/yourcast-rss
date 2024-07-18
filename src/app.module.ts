import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EpisodeEntity} from './database/entity/episode.entity';
import {ShowEntity} from './database/entity/show.entity';
import {UserEntity} from './database/entity/user.entity';
import {ConfigModule} from '@nestjs/config';
import * as process from 'node:process';
import {ShowService} from './database/service/show.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.secret', '.env']
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [EpisodeEntity, ShowEntity, UserEntity],
      logging: true
    }),
    TypeOrmModule.forFeature([EpisodeEntity, ShowEntity, UserEntity])
  ],
  controllers: [AppController],
  providers: [AppService, ShowService]
})
export class AppModule {
}
