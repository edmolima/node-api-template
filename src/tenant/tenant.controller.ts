import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  listAll() {
    return this.tenantService.findAllTenant();
  }

  @Post()
  createTenant(@Body() createTenantDto: CreateTenantDto) {
    const newTenant = {
      ...createTenantDto,
    };

    return this.tenantService.createTenant(newTenant);
  }

  @Patch(':id')
  updateTenant() {
    return this.tenantService.editTenant();
  }

  @Delete(':id')
  removeTenant() {
    return this.tenantService.removeTenant();
  }
}
