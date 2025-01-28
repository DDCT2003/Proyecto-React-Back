import { Module } from '@nestjs/common';
import { RopaService } from './ropa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RopaController } from './ropa.controller';
import { Ropa, RopaSchema } from './ropa.model';
import { MongoRopaRepository } from './MongoRopaRepository';
import { RopaRepositoryFactory } from './RopaRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }]),
  ],
  controllers: [RopaController],
  providers: [RopaService, RopaRepositoryFactory, MongoRopaRepository], 
  exports: [RopaService, RopaRepositoryFactory] 
})
export class RopaModule {}
