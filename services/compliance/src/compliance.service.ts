import { Injectable } from '@nestjs/common';

@Injectable()
export class ComplianceService {
  // TODO: integrate KYC providers (Jumio/Trulioo) and AML (TRM Labs/Elliptic)
  async checkKyc(userInfo: any) {
    // placeholder
  }
}
