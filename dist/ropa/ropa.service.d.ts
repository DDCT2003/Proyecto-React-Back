import { RopaRepositoryFactory } from './factories/ropa-repository.factory';
export declare class RopaService {
    private repositoryFactory;
    private ropaRepository;
    constructor(repositoryFactory: RopaRepositoryFactory);
    create(ropa: any): Promise<import("./ropa.model").Ropa>;
    findAll(): Promise<import("./ropa.model").Ropa[]>;
    searchOne(id: string): Promise<import("./ropa.model").Ropa>;
    update(id: string, updateRopa: any): Promise<import("./ropa.model").Ropa>;
    delete(id: string): Promise<import("./ropa.model").Ropa>;
}
