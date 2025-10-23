import { Module } from '@nestjs/common';
import { TenancyRepository } from './repository/tenancy.repository';
import { TenancyController } from './tenancy.controller';
import { TenancyService } from './tenancy.service';

@Module({
  providers: [TenancyRepository, TenancyService],
  controllers: [TenancyController],
})
export class TenancyModule {}
