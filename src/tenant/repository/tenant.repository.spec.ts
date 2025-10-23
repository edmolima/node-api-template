import { DataSource } from '../infra/datasource/tenant.datasource';
import { TenantRepository } from './tenant.repository';

describe('TenantRepository', () => {
  let mockDataSource: jest.Mocked<DataSource>;
  let repository: TenantRepository;

  const mockTenant = {
    id: '1',
    name: 'Test Tenant',
  };

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mockDataSource = {
      tenant: jest.fn().mockReturnValue(mockTenant),
    } as any;
    repository = new TenantRepository(mockDataSource);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create a tenant', () => {
    const result = repository.create({});
    expect(result).toEqual(mockTenant);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockDataSource.tenant).toHaveBeenCalled();
  });

  it('should update a tenant', () => {
    const result = repository.update();
    expect(result).toBe('Edmo');
  });

  it('should remove a tenant', () => {
    const result = repository.remove();
    expect(result).toBe('Edmo');
  });

  it('should return all tenants', () => {
    const result = repository.findAll();
    expect(result).toBe('Edmo');
  });
});
