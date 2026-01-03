import { Cat } from 'lucide-react';

export default function SpriteListSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Cat className="w-16 h-16 text-orange-500" />
        <h2 className="text-5xl font-bold text-gray-800">🐱 Sprite List & Info Panel</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">What is a Sprite?</h3>
            <p className="text-2xl">Any character or object in your project</p>
            <div className="mt-6 text-4xl">🐱 🚀 🎈 ⚽ 🦅</div>
          </div>

          <div className="bg-white border-4 border-orange-300 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Default Sprite</h3>
            <p className="text-xl text-gray-700"> <strong>Sprite1</strong> — a friendly cat 🐱</p>
          </div>
        </div>

        <div className="bg-white border-4 border-purple-300 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-purple-700 mb-6">Each Sprite has 3 Tabs:</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-100 p-6 rounded-xl border-l-8 border-blue-500">
              <h4 className="text-2xl font-bold text-blue-800 mb-2">1. Costumes</h4>
              <p className="text-xl text-gray-700">Different visual poses</p>
              <p className="text-lg text-gray-600 mt-2">Example: cat standing, cat walking</p>
            </div>

            <div className="bg-red-100 p-6 rounded-xl border-l-8 border-red-500">
              <h4 className="text-2xl font-bold text-red-800 mb-2">2. Sounds</h4>
              <p className="text-xl text-gray-700">Audio clips it can play</p>
              <p className="text-lg text-gray-600 mt-2">Example: meow, pop, footsteps</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl border-l-8 border-green-500">
              <h4 className="text-2xl font-bold text-green-800 mb-2">3. Code</h4>
              <p className="text-xl text-gray-700">Personal script area</p>
              <p className="text-lg text-gray-600 mt-2">Build programs for this sprite only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}