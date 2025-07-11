import { Controller, Post, Body } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';

@Controller('withdraw')
export class SettlementController {
  constructor(private readonly withdrawService: WithdrawService) {}

  @Post()
  withdraw(@Body() body: { address: string; amount: string }) {
    return this.withdrawService.withdrawUSDC(body.address, body.amount);
  }
}
