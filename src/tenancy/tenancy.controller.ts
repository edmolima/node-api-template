import { Controller, Get } from '@nestjs/common';
import { TenancyService } from './tenancy.service';

@Controller('tenancy')
export class TenancyController {
  constructor(private readonly tenancyService: TenancyService) {}

  @Get()
  listAll() {
    return this.tenancyService.listAllTenancy();
  }
}
