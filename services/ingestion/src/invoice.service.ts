import { Injectable } from '@nestjs/common';
import { Invoice } from '../../../shared/interfaces';
import * as QRCode from 'qrcode';
import { v4 as uuid } from 'uuid';

@Injectable()
export class InvoiceService {
  async createInvoice(amount: number, currency: string): Promise<Invoice> {
    const invoice: Invoice = {
      id: uuid(),
      merchantId: 'todo-merchant',
      amount,
      currency,
      address: 'todo-address',
      qrCode: '',
      status: 'pending',
    };
    const uri = `payto://crypto/${currency}?amount=${amount}`;
    invoice.qrCode = await QRCode.toDataURL(uri);
    return invoice;
  }
}
