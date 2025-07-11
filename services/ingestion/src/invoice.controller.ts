import { UseGuards } from "@nestjs/common";
import { ApiKeyGuard } from "./auth.guard";
import { Controller, Post, Body } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from '../../../shared/interfaces';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  async create(@Body() body: { amount: number; currency: string }): Promise<Invoice> {
    return this.invoiceService.createInvoice(body.amount, body.currency);
  }
}
