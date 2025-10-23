import { Role } from './role.entity';
import { Tenant } from './tenant.entity';

export class User {
  id: string;
  email: string;
  name: string;

  avatarUrl?: string;

  tenant: Tenant;

  roles: Role[];

  createdAt: Date;

  updatedAt: Date;

  isActive: boolean;
}
