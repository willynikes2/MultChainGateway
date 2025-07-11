import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ChainListener implements OnModuleInit {
  async onModuleInit() {
    // TODO: spin up listeners for BTC, ETH, SOL, FTM, BNB
    // Example using ethers.js WebSocketProvider
    // new ethers.providers.WebSocketProvider(process.env.ETHEREUM_RPC_WS);
  }
}
