import { Module } from '@nestjs/common';
import { RopaController } from './ropa.controller';
import { ClothesService } from './ClothesService';

@Module({
  providers: [ClothesService], // Agrega ClothesService aquí
  exports: [ClothesService], // Expórtalo para otros módulos
})
export class RopaModule {}
