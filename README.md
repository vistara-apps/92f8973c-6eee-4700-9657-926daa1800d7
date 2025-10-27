# x402 Agent Mint

A Base Mini App for minting exclusive x402 Agent NFTs for $0.10 USDC with gas-free transactions.

## Features

- 🎨 **Gas-Free Minting**: All gas fees covered by paymaster
- 🔗 **Farcaster Integration**: Social-native experience with identity binding
- 💎 **Unique Collectibles**: Each agent is identity-bound and unique
- 🚀 **Built on Base**: Leveraging Base L2 for fast, cheap transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Wagmi
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with Coinbase theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and fill in your API keys:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Get from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
- `NEXT_PUBLIC_BASE_RPC_URL`: Base RPC endpoint
- `NEXT_PUBLIC_PAYMASTER_URL`: Paymaster service URL for gas sponsorship
- `NEXT_PUBLIC_NFT_CONTRACT_ADDRESS`: Deployed NFT contract address
- `NEXT_PUBLIC_USDC_CONTRACT_ADDRESS`: USDC contract on Base (0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913)

## Deployment

This app is designed to be deployed on Vercel or any Next.js-compatible hosting platform.

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Smart Contract Integration

The app integrates with:
- **x402 Agent NFT Contract**: ERC-721 for minting agents
- **USDC Contract**: For $0.10 payments
- **Paymaster**: For gas sponsorship

## Farcaster Integration

The app uses Farcaster Frame SDK for:
- User identity (FID, username, Basename)
- Social sharing (composeCast)
- Notifications (useSendNotification)
- Frame embedding for viral growth

## License

MIT
