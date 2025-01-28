import { Model } from "mongoose";
import { Ropa } from "src/ropa/ropa.model";
export declare class ClothesService {
    private clothesModel;
    constructor(clothesModel: Model<Ropa>);
    getClothesByCriteria(clima: string, formalidad?: string, edad?: string): Promise<Ropa[]>;
}
