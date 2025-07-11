import { Injectable } from '@nestjs/common';

@Injectable()
export class WithdrawService {
  // TODO: integrate with Binance/Coinbase/Circle APIs using API keys
  async withdrawUSDC(address: string, amount: string) {
    // placeholder for withdrawal logic
  }
}
