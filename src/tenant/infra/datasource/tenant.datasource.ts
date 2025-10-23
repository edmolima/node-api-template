import { Tenant } from '../../entities/tenant.entity';

import dataJson from './tenant.json';

export class DataSource {
  constructor() {}

  tenant(tenant: Tenant) {
    const data = dataJson as unknown as Tenant;
    return Promise.resolve(data);
  }
}
