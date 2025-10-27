'use client';

import { useState } from 'react';
import { Sparkles, Share2, CheckCircle2 } from 'lucide-react';
import { useAccount } from 'wagmi';

const AGENT_TYPES = [
  { name: 'Guardian', color: 'from-blue-500 to-cyan-500', rarity: 'Common' },
  { name: 'Explorer', color: 'from-purple-500 to-pink-500', rarity: 'Uncommon' },
  { name: 'Collector', color: 'from-amber-500 to-orange-500', rarity: 'Rare' },
];

export function MintCard() {
  const { address, isConnected } = useAccount();
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);
  const [selectedAgent] = useState(AGENT_TYPES[0]);

  const handleMint = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    setIsMinting(true);
    
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      setMintSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setMintSuccess(false), 3000);
    }, 2000);
  };

  const handleShare = () => {
    // In production, this would use useSendNotification from @farcaster/frame-sdk
    alert('Share functionality would integrate with Farcaster here!');
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-surface rounded-lg shadow-card overflow-hidden border border-surface">
        {/* Agent Preview */}
        <div className="relative aspect-square bg-gradient-to-br from-surface to-bg p-8">
          <div className={`w-full h-full rounded-lg bg-gradient-to-br ${selectedAgent.color} flex items-center justify-center`}>
            <Sparkles className="w-24 h-24 text-white opacity-80" />
          </div>
          <div className="absolute top-4 right-4 bg-bg/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-fg">{selectedAgent.rarity}</span>
          </div>
        </div>

        {/* Agent Info */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-fg mb-2">
              {selectedAgent.name} Agent
            </h3>
            <p className="text-fg/70">
              A unique x402 Agent bound to your Farcaster identity
            </p>
          </div>

          {/* Price */}
          <div className="bg-bg rounded-lg p-4 border border-surface">
            <div className="flex items-center justify-between">
              <span className="text-fg/70">Price</span>
              <div className="text-right">
                <div className="text-2xl font-semibold text-accent">$0.10</div>
                <div className="text-xs text-fg/60">in USDC</div>
              </div>
            </div>
          </div>

          {/* Mint Button */}
          {!mintSuccess ? (
            <button
              onClick={handleMint}
              disabled={isMinting || !isConnected}
              className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-medium py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isMinting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Minting...
                </>
              ) : !isConnected ? (
                'Connect Wallet to Mint'
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Mint x402 Agent
                </>
              )}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="w-full bg-green-500/20 border border-green-500/50 text-green-400 font-medium py-4 rounded-lg flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Mint Successful!
              </div>
              <button
                onClick={handleShare}
                className="w-full bg-surface hover:bg-surface/80 text-fg font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share on Farcaster
              </button>
            </div>
          )}

          {/* Info */}
          <div className="text-xs text-fg/60 text-center space-y-1">
            <p>✨ Gas fees covered by paymaster</p>
            <p>🔒 NFT bound to your Farcaster identity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
