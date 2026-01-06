import { Repeat2 } from 'lucide-react';

export default function WhatIsALoopSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Repeat2 className="w-16 h-16 text-green-500" />
        <h2 className="text-5xl font-bold text-gray-800">What is a Loop?</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-blue-800 mb-3">The Problem</h3>
            <p className="text-2xl text-gray-700">Imagine making a character walk 100 steps...</p>
          </div>

          <div className="bg-red-100 border-l-8 border-red-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-red-800 mb-3">Without a Loop</h3>
            <p className="text-xl text-gray-700">You'd drag <strong>Move 10 steps</strong> block 10 times. Very messy!</p>
          </div>

          <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-green-800 mb-3">With a Loop</h3>
            <p className="text-xl text-gray-700">Use one <strong>Repeat (10)</strong> block with <strong>Move 10 steps</strong> inside. Clean and efficient!</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-12 aspect-video flex flex-col items-center justify-center">
            <div className="text-8xl mb-4">🔄</div>
            <p className="text-3xl font-bold text-gray-600 text-center">Do it again, and again, and again...</p>
            <p className="text-xl text-gray-500 mt-2 text-center">...until told to stop!</p>
          </div>
        </div>
      </div>
    </div>
  );
}