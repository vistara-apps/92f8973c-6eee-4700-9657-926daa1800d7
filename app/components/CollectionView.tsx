'use client';

import { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { useAccount } from 'wagmi';

interface Agent {
  id: string;
  name: string;
  type: string;
  rarity: string;
  color: string;
  mintedAt: string;
}

const MOCK_AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Guardian #001',
    type: 'Guardian',
    rarity: 'Common',
    color: 'from-blue-500 to-cyan-500',
    mintedAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Explorer #042',
    type: 'Explorer',
    rarity: 'Uncommon',
    color: 'from-purple-500 to-pink-500',
    mintedAt: '2024-01-16',
  },
];

export function CollectionView() {
  const { address, isConnected } = useAccount();
  const [agents] = useState<Agent[]>(MOCK_AGENTS);

  if (!isConnected) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-fg mb-2">
          Connect Your Wallet
        </h3>
        <p className="text-fg/70">
          Connect your wallet to view your x402 Agent collection
        </p>
      </div>
    );
  }

  if (agents.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-fg mb-2">
          No Agents Yet
        </h3>
        <p className="text-fg/70 mb-6">
          Mint your first x402 Agent to start your collection
        </p>
        <button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg transition-colors">
          Mint Your First Agent
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold text-fg mb-2">
          My Collection
        </h2>
        <p className="text-fg/70">
          {agents.length} {agents.length === 1 ? 'Agent' : 'Agents'} owned
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-surface rounded-lg overflow-hidden border border-surface hover:border-accent/50 transition-all duration-200 group"
          >
            {/* Agent Image */}
            <div className="relative aspect-square bg-gradient-to-br from-surface to-bg p-6">
              <div className={`w-full h-full rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                <Sparkles className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="absolute top-3 right-3 bg-bg/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-fg">{agent.rarity}</span>
              </div>
            </div>

            {/* Agent Info */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-fg">{agent.name}</h3>
                <p className="text-sm text-fg/60">{agent.type}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-fg/60">
                <span>Minted {agent.mintedAt}</span>
                <button className="flex items-center gap-1 hover:text-accent transition-colors">
                  View
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
