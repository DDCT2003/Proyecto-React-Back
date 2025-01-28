import { Module } from '@nestjs/common';
import { RopaService } from './ropa.service';
import { RopaRepositoryFactory } from './factories/ropa-repository.factory';

import { MongooseModule } from '@nestjs/mongoose';
import { RopaController } from './ropa.controller';
import { Ropa, RopaSchema } from './ropa.model';
import { MongoRopaRepository } from './MongoRopaRepository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }])],
  controllers: [RopaController],
  providers: [RopaService, RopaRepositoryFactory, MongoRopaRepository],
})
export class RopaModule {}
