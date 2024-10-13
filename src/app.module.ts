import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UserModule } from './user/user.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
    }),
    IngredientsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
