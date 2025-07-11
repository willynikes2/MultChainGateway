import { Controller, Post, Body } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { Merchant } from '../../../shared/interfaces';
import { v4 as uuid } from 'uuid';

@Controller('merchants')
export class OnboardingController {
  constructor(private readonly compliance: ComplianceService) {}

  @Post()
  async onboard(@Body() body: { name: string }): Promise<Merchant> {
    // TODO: call KYC provider
    return {
      id: uuid(),
      name: body.name,
      apiKey: 'generated-api-key',
      kycStatus: 'pending',
    };
  }
}
