import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { TenancyModule } from '../src/tenancy/tenancy.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TenancyModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tenancy (GET)', () => {
    return request(app.getHttpServer())
      .get('/tenancy')
      .expect(200)
      .expect('Edmo');
  });
});
