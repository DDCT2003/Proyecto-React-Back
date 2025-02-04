import { Controller, Get, Post, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Formalidad } from 'src/user/schemas/user.schema';
import { Ropa } from 'src/ropa/ropa.model';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('clothes')
  async getClothes(@Query('city') city: string): Promise<Ropa[]> {
    return this.weatherService.getClothes('Quito');
  }

  @Get('clotheswfa')
  async getClothesWFA(
    @Query('formalidad') formalidad: string,
    @Query('edad') edad: number,
  ): Promise<Ropa[]> {
    return this.weatherService.getClothesByAgeAndFormality("Quito",edad, formalidad);
  }
}
