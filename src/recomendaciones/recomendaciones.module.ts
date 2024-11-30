import { Module } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';
import { RecomendacionesController } from './recomendaciones.controller';

@Module({
  providers: [RecomendacionesService],
  controllers: [RecomendacionesController]
})
export class RecomendacionesModule {}
