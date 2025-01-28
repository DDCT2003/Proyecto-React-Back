import { Injectable } from '@nestjs/common';
import { MongoRopaRepository } from '../repositories/mongo-ropa.repository';
import { IRopaRepository } from '../interfaces/ropa-repository.interface';

@Injectable()
export class RopaRepositoryFactory {
  constructor(private readonly mongoRepository: MongoRopaRepository) {}

  createRepository(type: string): IRopaRepository {
    if (type === 'mongo') {
      return this.mongoRepository;
    }
    throw new Error('Repository type not supported');
  }
}
