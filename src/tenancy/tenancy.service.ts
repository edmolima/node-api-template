import { Injectable } from '@nestjs/common';
import { TenancyRepository } from './repository/tenancy.repository';

@Injectable()
export class TenancyService {
  constructor(private readonly repository: TenancyRepository) {}

  listAllTenancy() {
    return this.repository.findAll();
  }
}
