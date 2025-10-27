export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-base-light mx-auto animate-pulse"></div>
        <p className="text-fg/70">Loading x402 Agent Mint...</p>
      </div>
    </div>
  );
}
