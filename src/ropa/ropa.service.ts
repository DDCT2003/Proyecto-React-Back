import { Injectable } from '@nestjs/common';
import { RopaRepositoryFactory } from './RopaRepository';
import { RopaValidator } from './Validators/RopaValidator';
import { IRopaRepository } from './Interfaces/ropa-repository.interface';


@Injectable()
export class RopaService {
  private ropaRepository: IRopaRepository;

  constructor(private repositoryFactory: RopaRepositoryFactory) {
    this.ropaRepository = this.repositoryFactory.createRepository('mongo'); 
  }

  async create(ropa: any) {
    RopaValidator.validateEdad(ropa.edad);
    return this.ropaRepository.create(ropa);
  }

  async findAll() {
    return this.ropaRepository.findAll();
  }

  async searchOne(id: string) {
    return this.ropaRepository.findOneById(id);
  }

  async update(id: string, updateRopa: any) {
    RopaValidator.validateEdad(updateRopa.edad);
    return this.ropaRepository.update(id, updateRopa);
  }

  async delete(id: string) {
    return this.ropaRepository.delete(id);
  }
}
