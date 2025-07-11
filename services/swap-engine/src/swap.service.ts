import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SwapService {
  constructor(private readonly http: HttpService) {}

  async quote(from: string, to: string, amount: string, slippage: number) {
    // TODO: call DEX aggregator quote API
    return this.http.get('https://api.1inch.io/v5.0/1/quote', {
      params: { fromTokenAddress: from, toTokenAddress: to, amount, slippage },
    }).toPromise();
  }

  async swap(from: string, to: string, amount: string, slippage: number) {
    // TODO: execute swap via aggregator
  }
}
