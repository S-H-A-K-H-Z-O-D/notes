import { BadRequestException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

@Injectable()
export class ParseObjectIdPipe {
  transform(value: any): any {
    const isValidObjectId = ObjectId.isValid(value);
    if (!isValidObjectId) {
      throw new BadRequestException('Provide a valid MongoDB ObjectId');
    }
    return value;
  }
}
