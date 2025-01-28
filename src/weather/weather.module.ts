import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ApiWeatherService } from './ApiWeatherService';
import { WeatherCategorizationService } from './WeatherCategorizationService';
import { ClothesService } from './ClothesService';
import { RopaModule } from 'src/ropa/ropa.module';

@Module({
  imports: [RopaModule],  
  controllers: [WeatherController],
  providers: [
    WeatherService,
    ApiWeatherService,  // 
    WeatherCategorizationService,
    ClothesService, // 
  ],
  exports: [WeatherService],
})
export class WeatherModule {}
