import { Module } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { OnboardingController } from './onboarding.controller';

@Module({
  controllers: [OnboardingController],
  providers: [ComplianceService],
})
export class AppModule {}
