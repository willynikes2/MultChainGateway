export interface Invoice {
  id: string;
  merchantId: string;
  amount: number;
  currency: string;
  address: string;
  qrCode: string;
  status: 'pending' | 'paid' | 'confirmed' | 'failed';
}
