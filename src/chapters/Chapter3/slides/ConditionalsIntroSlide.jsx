import { Split } from 'lucide-react';

export default function ConditionalsIntroSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-12 text-center">
      <Split className="w-24 h-24 text-red-500 mb-6" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Making Decisions</h1>
      <h2 className="text-4xl font-semibold text-red-600 mb-10">Bab 3: Conditionals & Sensing</h2>
      <p className="text-3xl text-gray-700 max-w-3xl">
        Give your game a "Brain" to interact with players!
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="bg-green-100 px-6 py-3 rounded-full text-green-700 font-semibold text-xl">
          🎯 Duration: 1-2 Weeks
        </div>
        <div className="bg-purple-100 px-6 py-3 rounded-full text-purple-700 font-semibold text-xl">
          🧠 Focus: If-Then Logic
        </div>
        <div className="bg-blue-100 px-6 py-3 rounded-full text-blue-700 font-semibold text-xl">
          🕹️ Focus: Sensing Inputs
        </div>
      </div>
    </div>
  );
}