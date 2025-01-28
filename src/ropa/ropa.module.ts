import { Module } from '@nestjs/common';
import { RopaService } from './ropa.service';
import { RopaRepositoryFactory } from './factories/ropa-repository.factory';
import { MongoRopaRepository } from 'src/ropa/repositories/mongo-ropa.repository';
import { IRopaRepository } from 'src/ropa/interfaces/ropa-repository.interface';
import { MongooseModule } from '@nestjs/mongoose';
import { RopaController } from './ropa.controller';
import { Ropa, RopaSchema } from './ropa.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }])],
  controllers: [RopaController],
  providers: [RopaService, RopaRepositoryFactory, MongoRopaRepository],
})
export class RopaModule {}
