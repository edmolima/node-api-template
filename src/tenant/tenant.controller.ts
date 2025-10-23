import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  listAll() {
    return this.tenantService.findAllTenant();
  }

  @Post()
  createTenant() {
    return this.tenantService.createTenant();
  }

  @Patch()
  updateTenant() {
    return this.tenantService.editTenant();
  }

  @Delete()
  removeTenant() {
    return this.tenantService.removeTenant();
  }
}
