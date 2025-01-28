import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ropa } from "src/ropa/ropa.model";

@Injectable()
export class ClothesService {
  constructor(@InjectModel(Ropa.name) private clothesModel: Model<Ropa>) {}

  async getClothesByCriteria(
    clima: string,
    formalidad?: string,
    edad?: string,
  ): Promise<Ropa[]> {
    const query: any = { clima };
    if (formalidad) query.formalidad = formalidad;
    if (edad) query.edad = edad;

    return this.clothesModel.find(query).exec();
  }
}
