import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenancyModule } from './tenancy/tenancy.module';
import { LakeModule } from './lake/lake.module';
import { InsightsModule } from './insights/insights.module';
import { IntelligenceModule } from './intelligence/intelligence.module';
import { EtlModule } from './etl/etl.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TenancyModule, LakeModule, InsightsModule, IntelligenceModule, EtlModule, CommonModule, DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
