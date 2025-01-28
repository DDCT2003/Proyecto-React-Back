import { MongoRopaRepository } from 'src/ropa/repositories/mongo-ropa.repository';
import { IRopaRepository } from 'src/ropa/interfaces/ropa-repository.interface';
export declare class RopaRepositoryFactory {
    private readonly mongoRepository;
    constructor(mongoRepository: MongoRopaRepository);
    createRepository(type: string): IRopaRepository;
}
