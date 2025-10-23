import { Config } from '../entities/tenant.entity';
import { User } from '../entities/user.entity';

export class CreateTenantDto {
  name: string;
  description: string;

  config?: Config;

  users?: User[];

  isActive?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
