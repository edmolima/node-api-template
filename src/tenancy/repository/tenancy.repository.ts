import { Injectable } from '@nestjs/common';

@Injectable()
export class TenancyRepository {
  constructor() {}

  findAll() {
    return 'Edmo';
  }
}
