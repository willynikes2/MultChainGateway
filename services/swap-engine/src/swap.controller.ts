import { Controller, Post, Body } from '@nestjs/common';
import { SwapService } from './swap.service';

@Controller('swap')
export class SwapController {
  constructor(private readonly swapService: SwapService) {}

  @Post('quote')
  quote(@Body() body: { from: string; to: string; amount: string; slippage: number }) {
    return this.swapService.quote(body.from, body.to, body.amount, body.slippage);
  }
}
