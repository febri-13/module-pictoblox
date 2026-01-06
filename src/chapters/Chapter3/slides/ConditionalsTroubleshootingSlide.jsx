import { Wrench, AlertTriangle } from 'lucide-react';

export default function ConditionalsTroubleshootingSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Wrench className="w-16 h-16 text-red-500" />
        <h2 className="text-5xl font-bold text-gray-800">Troubleshooting Guide</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8 text-center">Common Logic Errors & Fixes</p>

      <div className="space-y-6">
        {/* Problem 1 */}
        <div className="bg-yellow-100 border-l-8 border-yellow-500 p-6 rounded-r-2xl">
          <h3 className="text-3xl font-bold text-yellow-800 mb-3 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" /> Problem: Character only jumps sometimes
          </h3>
          <p className="text-xl text-gray-700 mb-2"><strong>Cause:</strong> The <span className="font-mono">If key pressed</span> block is outside the <span className="font-mono">Forever</span> loop.</p>
          <p className="text-xl text-gray-700"><strong>Fix:</strong> Move the <span className="font-mono">If</span> block inside the <span className="font-mono">Forever</span> loop so it checks the key continuously.</p>
        </div>

        {/* Problem 2 */}
        <div className="bg-red-100 border-l-8 border-red-500 p-6 rounded-r-2xl">
          <h3 className="text-3xl font-bold text-red-800 mb-3 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" /> Problem: Game doesn't stop when lives hit 0
          </h3>
          <p className="text-xl text-gray-700 mb-2"><strong>Cause:</strong> Using <span className="font-mono">If &lt;Lives = 0&gt;</span>. If lives skip from 1 to -1, it misses 0.</p>
          <p className="text-xl text-gray-700"><strong>Fix:</strong> Use <span className="font-mono">If &lt;Lives &lt; 1&gt;</span> to be safer.</p>
        </div>

        <div className="bg-blue-100 border-2 border-blue-400 p-6 rounded-xl text-center">
          <p className="text-2xl font-bold text-blue-800">💡 Pro Tip: Always test your If-Then logic inside a Forever loop for real-time interaction!</p>
        </div>
      </div>
    </div>
  );
}