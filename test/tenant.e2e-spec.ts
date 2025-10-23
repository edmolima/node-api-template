import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { TenantModule } from '../src/tenant/tenant.module';

describe('TenantModule (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TenantModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tenant (GET)', () => {
    return request(app.getHttpServer())
      .get('/tenant')
      .expect(200)
      .expect('Edmo');
  });

  it('/tenant (POST)', () => {
    return request(app.getHttpServer())
      .post('/tenant')
      .expect(201)
      .expect('Edmo');
  });

  it('/tenant (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/tenant')
      .expect(200)
      .expect('Edmo');
  });

  it('/tenant (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/tenant')
      .expect(200)
      .expect('Edmo');
  });
});
