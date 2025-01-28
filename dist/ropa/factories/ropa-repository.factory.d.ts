import { IRopaRepository } from '../Interfaces/ropa-repository.interface';
import { MongoRopaRepository } from '../repositories/mongo-ropa.repository';
export declare class RopaRepositoryFactory {
    private readonly mongoRepository;
    constructor(mongoRepository: MongoRopaRepository);
    createRepository(type: string): IRopaRepository;
}
