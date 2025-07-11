# Multi-Chain Crypto Payment Gateway Scaffold

This repository contains a minimal scaffold for a multi-service crypto payment gateway.

## Services

- **ingestion** – Generates invoices and QR codes, listens for chain payments.
- **swap-engine** – Calls DEX aggregators (1inch, LI.FI, OpenOcean, ParaSwap) for quotes/swaps.
- **wallet-manager** – Manages MPC key shares for custodial wallets.
- **settlement** – Handles USDC balances and withdrawals to exchanges.
- **compliance** – Merchant onboarding with KYC checks.
- **monitoring** – Emits webhooks for payment and swap events.

## Getting Started

1. Install dependencies in each service directory.
2. Copy `.env.example` to `.env` and fill in required variables.
3. Run `docker-compose up --build` to start all services and databases.

## TODO

- Implement API documentation.
- Complete compliance rules and Travel Rule logic.
- Add environment variables for RPC URLs, API keys, and database credentials.
- Flesh out blockchain listeners and swap execution logic.
- Configure CI pipeline and tests.
