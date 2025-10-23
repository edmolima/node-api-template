import { Test, TestingModule } from '@nestjs/testing';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource } from './infra/datasource/tenant.datasource';
import { TenantRepository } from './repository/tenant.repository';
import { TenantService } from './tenant.service';

describe('TenantService', () => {
  let service: TenantService;
  let repository: TenantRepository;
  let dataSourceMock: { tenant: jest.Mock };

  beforeEach(async () => {
    dataSourceMock = {
      tenant: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantService,
        TenantRepository,
        {
          provide: DataSource,
          useValue: dataSourceMock,
        },
      ],
    }).compile();

    service = module.get<TenantService>(TenantService);
    repository = module.get<TenantRepository>(TenantRepository);
  });

  it('tenant service should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('createTenant', () => {
    it('should create a tenant with correct data structure', async () => {
      // arrange
      const mockInput: CreateTenantDto = {
        name: 'Test Tenant',
        description: 'Test Description',
      };

      const expectedTenantData = {
        id: 'test-id-tenant', // O serviço hardcoda esse ID
        ...mockInput,
      };

      dataSourceMock.tenant.mockResolvedValue(expectedTenantData);

      // act
      const result = await service.createTenant(mockInput);

      // assert
      expect(dataSourceMock.tenant).toHaveBeenCalledWith(expectedTenantData);
      expect(result).toEqual(expectedTenantData);
    });
  });
});
