import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.schema';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { username, email } = createUserDto;
    const existingUser = await this.userModel.findOne({ $or: [{ username }, { email }] });
    if (existingUser) throw new NotFoundException(['User already exists']);

    return this.userModel.create(createUserDto);
  }

  async login(loginUserDto: LoginUserDto) {
    const { username, password } = loginUserDto;
    const existingUser = await this.userModel.findOne({ username, password });

    if (!existingUser) throw new NotFoundException(['username or password incorrect']);

    return existingUser;
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) throw new NotFoundException(['User not found']);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });

    if (!user) throw new NotFoundException(['User not found']);

    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);

    if (!user) throw new NotFoundException(['User not found']);

    return user;
  }
}
