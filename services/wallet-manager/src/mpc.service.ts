import { Injectable } from '@nestjs/common';

@Injectable()
export class MpcService {
  // TODO: integrate with Fireblocks or ThresholdCrypto for MPC key shares
  async signTransaction(tx: any) {
    // placeholder for signing via MPC provider
  }
}
