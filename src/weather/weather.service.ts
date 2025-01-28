import { Ropa } from "src/ropa/ropa.model";
import { WeatherApiInterface } from "./ApiInterface";
import { WeatherCategorizationService } from "./WeatherCategorizationService";
import { ClothesService } from "./ClothesService";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WeatherService {
  constructor(
    private readonly weatherApi: WeatherApiInterface,
    private readonly weatherCategorization: WeatherCategorizationService,
    private readonly clothesService: ClothesService,
  ) {}

  async getClothes(city: string): Promise<Ropa[]> {
    const temperature = await this.weatherApi.getTemperature(city);
    const category = this.weatherCategorization.categorizeTemperature(temperature);

    return this.clothesService.getClothesByCriteria(category);
  }

  async getClothesByAgeAndFormality(
    city: string,
    age: number,
    formalidad: string,
  ): Promise<Ropa[]> {
    const temperature = await this.weatherApi.getTemperature(city);
    const tempCategory = this.weatherCategorization.categorizeTemperature(temperature);
    const ageCategory = this.weatherCategorization.categorizeAge(age);

    return this.clothesService.getClothesByCriteria(
      tempCategory,
      formalidad,
      ageCategory,
    );
  }
}
