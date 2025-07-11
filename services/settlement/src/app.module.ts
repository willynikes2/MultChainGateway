import { Module } from '@nestjs/common';
import { SettlementController } from './settlement.controller';
import { WithdrawService } from './withdraw.service';

@Module({
  controllers: [SettlementController],
  providers: [WithdrawService],
})
export class AppModule {}
