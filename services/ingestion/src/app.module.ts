import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { ChainListener } from './chain.listener';
import { ApiKeyGuard } from "./auth.guard";

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService, ChainListener, ApiKeyGuard],
})
export class AppModule {}
