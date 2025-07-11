import { Module } from '@nestjs/common';
import { MpcService } from './mpc.service';

@Module({
  providers: [MpcService],
})
export class AppModule {}
