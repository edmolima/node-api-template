import { User } from './user.entity';

export class Tenant {
  id: string;
  name: string;

  description: string;

  // relationship
  users: User[];

  isActive?: boolean;
}
