import { Injectable } from '@nestjs/common';
import { TenantRepository } from './repository/tenant.repository';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  listAllTenant() {
    return this.tenantRepository.findAll();
  }
}
