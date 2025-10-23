import { User } from './user.entity';

export type Config = {
  subscriptionPlan?: string;
  region?: string;
  lakePaths?: {
    bronze: string;
    silver: string;
    gold: string;
  };
};

export class Tenant {
  id: string;
  name: string;
  description: string;

  config?: Config;

  users?: User[];

  isActive?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
