import { Repeat } from 'lucide-react';

export default function LoopsIntroSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-12 text-center">
      <Repeat className="w-24 h-24 text-blue-500 mb-6" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">The Power of Repetition</h1>
      <h2 className="text-4xl font-semibold text-blue-600 mb-10">Bab 2: Loops</h2>
      <p className="text-3xl text-gray-700 max-w-3xl">
        Master animations and efficient code with the magic of loops!
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="bg-green-100 px-6 py-3 rounded-full text-green-700 font-semibold text-xl">
          🎯 Duration: 1 Week
        </div>
        <div className="bg-purple-100 px-6 py-3 rounded-full text-purple-700 font-semibold text-xl">
          🔄 Focus: Loops (Repeat, Forever)
        </div>
      </div>
    </div>
  );
}