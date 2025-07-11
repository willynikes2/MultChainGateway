export interface SwapJob {
  id: string;
  txHash: string;
  fromToken: string;
  toToken: string;
  amount: string;
  slippage: number;
  status: 'pending' | 'completed' | 'failed';
}
