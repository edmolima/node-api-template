import { Injectable } from '@nestjs/common';
import { TenantRepository } from './repository/tenant.repository';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  findAllTenant() {
    return this.tenantRepository.findAll();
  }

  createTenant() {
    return this.tenantRepository.create();
  }

  removeTenant() {
    return this.tenantRepository.remove();
  }

  editTenant() {
    return this.tenantRepository.update();
  }
}
