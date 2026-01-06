import { Wrench } from 'lucide-react';

export default function IfThenProjectSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Wrench className="w-16 h-16 text-orange-500" />
        <h2 className="text-5xl font-bold text-gray-800">Project: Catch the Fruit</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8 text-center">Combining Loops (Chapter 2) and Logic (Chapter 3)</p>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold mb-3">The Game Loop (Forever)</h3>
          <p className="text-xl">We need the game to check rules constantly. Put <strong>If-Then</strong> inside a <strong>Forever</strong> loop.</p>
        </div>

        <div className="bg-white border-4 border-blue-300 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Step-by-Step Logic:</h3>
          <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
            <li><strong>Gravity:</strong> <span className="font-mono">change y by -5</span> (Always happening inside Forever)</li>
            <li><strong>Catching:</strong> <span className="font-mono">If &lt;touching [Bowl]?&gt; then</span> → <span className="font-mono">Change Score</span>, <span className="font-mono">Reset Fruit Position</span></li>
            <li><strong>Game Over:</strong> <span className="font-mono">If &lt;y position &lt; -170&gt; then</span> → <span className="font-mono">Change Lives</span>, <span className="font-mono">Reset Fruit Position</span></li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl text-center">
          <h3 className="text-4xl font-bold mb-4">Your Mission:</h3>
          <p className="text-2xl">Build this game using the blocks you've learned!</p>
        </div>
      </div>
    </div>
  );
}