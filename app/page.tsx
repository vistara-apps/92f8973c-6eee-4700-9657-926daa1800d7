'use client';

import { useEffect, useState } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Wallet, Sparkles, Users, Zap } from 'lucide-react';
import { MintCard } from './components/MintCard';
import { CollectionView } from './components/CollectionView';
import { FeatureCard } from './components/FeatureCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<'mint' | 'collection'>('mint');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-12 w-12 rounded-full bg-accent"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-base-light flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-fg">x402 Agent Mint</h1>
                <p className="text-sm text-fg/60">Mint exclusive agents for $0.10</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b border-surface">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-1">
            <button
              onClick={() => setView('mint')}
              className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                view === 'mint'
                  ? 'text-accent'
                  : 'text-fg/60 hover:text-fg'
              }`}
            >
              Mint Agent
              {view === 'mint' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
            <button
              onClick={() => setView('collection')}
              className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                view === 'collection'
                  ? 'text-accent'
                  : 'text-fg/60 hover:text-fg'
              }`}
            >
              My Collection
              {view === 'collection' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {view === 'mint' ? (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-semibold text-fg">
                Mint Your x402 Agent
              </h2>
              <p className="text-lg text-fg/70 max-w-2xl mx-auto">
                Join the exclusive x402 Agent collection. Each agent is unique, 
                identity-bound, and costs just $0.10 USDC with zero gas fees.
              </p>
            </div>

            {/* Mint Card */}
            <div className="flex justify-center">
              <MintCard />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Gas-Free Minting"
                description="All gas fees covered by our paymaster. Just pay $0.10 USDC."
              />
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="Social Native"
                description="Share your agents on Farcaster and grow the community."
              />
              <FeatureCard
                icon={<Wallet className="w-6 h-6" />}
                title="Identity Bound"
                description="Each agent is tied to your Farcaster identity and Basename."
              />
            </div>
          </div>
        ) : (
          <CollectionView />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-surface mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-fg/60">
              © 2024 x402 Agent Mint. Built on Base.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-fg/60 hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-fg/60 hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-fg/60 hover:text-accent transition-colors">
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
