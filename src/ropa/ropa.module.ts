import { Module } from '@nestjs/common';
import { RopaService } from './ropa.service';
import { RopaRepositoryFactory } from './factories/ropa-repository.factory';  // <- Asegúrate de importar esto
import { MongoRopaRepository } from './repositories/mongo-ropa.repository';  // <- También este
import { MongooseModule } from '@nestjs/mongoose';
import { RopaController } from './ropa.controller';
import { Ropa, RopaSchema } from './ropa.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }]),
  ],
  controllers: [RopaController],
  providers: [RopaService, RopaRepositoryFactory, MongoRopaRepository], 
  exports: [RopaService, RopaRepositoryFactory] 
})
export class RopaModule {}
