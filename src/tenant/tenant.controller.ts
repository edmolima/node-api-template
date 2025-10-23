import { Controller, Get } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  listAll() {
    return this.tenantService.listAllTenant();
  }
}
