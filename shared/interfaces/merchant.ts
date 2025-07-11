export interface Merchant {
  id: string;
  name: string;
  apiKey: string;
  kycStatus: 'pending' | 'approved' | 'rejected';
}
