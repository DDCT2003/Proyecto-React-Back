import { MongoRopaRepository } from '../repositories/mongo-ropa.repository';
import { IRopaRepository } from '../interfaces/ropa-repository.interface';
export declare class RopaRepositoryFactory {
    private readonly mongoRepository;
    constructor(mongoRepository: MongoRopaRepository);
    createRepository(type: string): IRopaRepository;
}
