import { Injectable } from "@nestjs/common";
import { Ropa } from "src/ropa/ropa.model";
import { WeatherCategorizationService } from "./WeatherCategorizationService";
import { ClothesService } from "./ClothesService";
import { ApiWeatherService } from "./ApiWeatherService";

@Injectable()
export class WeatherService {
  constructor(
    private readonly weatherApi: ApiWeatherService,  // Cambio aquí
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
