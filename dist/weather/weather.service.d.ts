import { Ropa } from "src/ropa/ropa.model";
import { WeatherApiInterface } from "./ApiInterface";
import { WeatherCategorizationService } from "./WeatherCategorizationService";
import { ClothesService } from "./ClothesService";
export declare class WeatherService {
    private readonly weatherApi;
    private readonly weatherCategorization;
    private readonly clothesService;
    constructor(weatherApi: WeatherApiInterface, weatherCategorization: WeatherCategorizationService, clothesService: ClothesService);
    getClothes(city: string): Promise<Ropa[]>;
    getClothesByAgeAndFormality(city: string, age: number, formalidad: string): Promise<Ropa[]>;
}
