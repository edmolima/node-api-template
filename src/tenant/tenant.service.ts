import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantRepository } from './repository/tenant.repository';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  findAllTenant() {
    return this.tenantRepository.findAll();
  }

  createTenant(createTenantDto: CreateTenantDto) {
    const newTenant = {
      id: 'edmo',
      ...createTenantDto,
    };

    return this.tenantRepository.create(newTenant);
  }

  removeTenant() {
    return this.tenantRepository.remove();
  }

  editTenant() {
    return this.tenantRepository.update();
  }
}
