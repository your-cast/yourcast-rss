import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowEntity } from '../entity/show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowService {

  constructor(
    @InjectRepository(ShowEntity) private readonly showRepository: Repository<ShowEntity>,
  ) {
  }

  async findShow(token: string): Promise<ShowEntity> {
    const showEntity = await this.showRepository.findOne({
      where: { token: token },
    });
    if (!showEntity) {
      throw new HttpException('Feed not found', HttpStatus.NOT_FOUND);
    }
    return showEntity;
  }
}
