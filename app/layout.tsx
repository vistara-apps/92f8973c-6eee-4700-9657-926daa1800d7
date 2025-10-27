import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'x402 Agent Mint',
  description: 'Mint exclusive x402 Agents for $0.10 in USDC, gas-free, directly from Farcaster.',
  openGraph: {
    title: 'x402 Agent Mint',
    description: 'Mint exclusive x402 Agents for $0.10 in USDC',
    images: ['https://x402agent.xyz/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
