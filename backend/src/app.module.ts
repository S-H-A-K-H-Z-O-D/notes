import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './moduls/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://erkinovdiyorbek39:sC9X7UktKggXB3Mo@cluster0.7l4zcbr.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
