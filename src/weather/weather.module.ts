import { Module } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherCategorizationService } from "./WeatherCategorizationService";
import { WeatherController } from "./weather.controller";
import { RopaModule } from "../ropa/ropa.module";
import { HttpModule } from "@nestjs/axios";
import { ApiWeatherService } from "./ApiWeatherService";
import { ClothesService } from "./ClothesService";

@Module({
  imports: [HttpModule, RopaModule], // Importa HttpModule si usas HttpService
  controllers: [WeatherController],
  providers: [
    WeatherService,
    ApiWeatherService, // Registra la implementación concreta
    WeatherCategorizationService,
    ClothesService,
  ],
  exports: [WeatherService],
})
export class WeatherModule {}
