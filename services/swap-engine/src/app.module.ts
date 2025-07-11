import { Module, HttpModule } from '@nestjs/common';
import { SwapService } from './swap.service';
import { SwapController } from './swap.controller';

@Module({
  imports: [HttpModule],
  controllers: [SwapController],
  providers: [SwapService],
})
export class AppModule {}
