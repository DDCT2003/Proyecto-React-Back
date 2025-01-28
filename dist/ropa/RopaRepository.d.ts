import { IRopaRepository } from "./Interfaces/ropa-repository.interface.js";
import { MongoRopaRepository } from "./MongoRopaRepository";
export declare class RopaRepositoryFactory {
    private readonly mongoRepository;
    constructor(mongoRepository: MongoRopaRepository);
    createRepository(type: string): IRopaRepository;
}
