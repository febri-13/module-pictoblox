import { Cat } from 'lucide-react';

export default function LoopsPracticeSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-12">
      <div className="text-9xl mb-8">🐾</div>
      <h1 className="text-6xl font-bold mb-6 text-gray-800">
        Mini Project: Walking & Talking
      </h1>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">🎯 Your Mission:</h2>
        <p className="text-3xl">
          Create an animation where a character walks in a loop AND talks occasionally!
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="bg-blue-100 px-8 py-4 rounded-full text-blue-700 font-semibold text-xl">
          🔄 Use Forever Loop
        </div>
        <div className="bg-purple-100 px-8 py-4 rounded-full text-purple-700 font-semibold text-xl">
          👔 Switch Costumes
        </div>
        <div className="bg-pink-100 px-8 py-4 rounded-full text-pink-700 font-semibold text-xl">
          💬 Add Say Block
        </div>
        <div className="bg-green-100 px-8 py-4 rounded-full text-green-700 font-semibold text-xl">
          ⏱️ Add Wait Blocks
        </div>
      </div>
    </div>
  );
}