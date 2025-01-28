import { Injectable } from "@nestjs/common";
import { IRopaRepository } from "./Interfaces/ropa-repository.interface.js";
import { MongoRopaRepository } from "./MongoRopaRepository";

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
