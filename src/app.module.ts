import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EtlModule } from './etl/etl.module';
import { InsightsModule } from './insights/insights.module';
import { IntelligenceModule } from './intelligence/intelligence.module';
import { LakeModule } from './lake/lake.module';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [
    TenancyModule,
    LakeModule,
    InsightsModule,
    IntelligenceModule,
    EtlModule,
    CommonModule,
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
