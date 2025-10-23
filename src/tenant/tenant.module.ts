import { Module } from '@nestjs/common';
import { TenantRepository } from './repository/tenant.repository';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';

@Module({
  providers: [TenantRepository, TenantService],
  controllers: [TenantController],
})
export class TenantModule {}
