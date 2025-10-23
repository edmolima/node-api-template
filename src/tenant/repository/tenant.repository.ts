import { Injectable } from '@nestjs/common';
import { Tenant } from '../entities/tenant.entity';
import { DataSource } from '../infra/datasource/tenant.datasource';
import { ITenantRepository } from './tenant.interface';

@Injectable()
export class TenantRepository implements ITenantRepository {
  constructor(private readonly dbsource: DataSource) {}

  create(tenant: Tenant) {
    return this.dbsource.tenant(tenant);
  }
  update() {
    return 'Edmo';
  }
  remove() {
    return 'Edmo';
  }

  findAll() {
    return 'Edmo';
  }
}
