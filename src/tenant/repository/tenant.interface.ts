import { Tenant } from '../entities/tenant.entity';

export interface ITenantRepository {
  create(tenant: Tenant): Promise<Tenant>;
  update(): string;
  remove(): string;
  findAll(): string;
}
