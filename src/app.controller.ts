import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Controller, Get } from '@nestjs/common';
import { Owner } from './database/model/owner.model';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: EntityRepository<Owner>,
  ) {}

  @Get()
  async getOwnersWithoutPets(): Promise<Owner[]> {
    return this.ownerRepository.find({
      dogs: {
        $none: {},
      },
      cats: {
        $none: {},
      },
    });
  }
}
