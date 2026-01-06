import { Eye } from 'lucide-react';

export default function SensingIntroSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Eye className="w-16 h-16 text-cyan-500" />
        <h2 className="text-5xl font-bold text-gray-800">Sensing (The Inputs)</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-blue-800 mb-3">What is Sensing?</h3>
            <p className="text-2xl text-gray-700">Sensing blocks (Light Blue) answer the question:</p>
            <p className="text-3xl font-bold text-purple-700 mt-2">"Is this happening?"</p>
          </div>

          <div className="bg-purple-100 border-l-8 border-purple-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-purple-800 mb-3">Common Inputs</h3>
            <ul className="text-2xl text-gray-700 space-y-2">
              <li>🖱️ Mouse clicks/position</li>
              <li>⌨️ Keyboard presses</li>
              <li>🎮 Sprite collisions</li>
              <li>🎨 Color detection</li>
            </ul>
          </div>

          <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-green-800 mb-3">Combine with Logic</h3>
            <p className="text-xl text-gray-700">Use sensing blocks <strong>inside</strong> the diamond-shaped logic blocks to make decisions!</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-12 aspect-video flex flex-col items-center justify-center">
            <div className="text-8xl mb-4">👂👁️</div>
            <p className="text-3xl font-bold text-gray-600 text-center">Listen & Watch</p>
            <p className="text-xl text-gray-500 mt-2 text-center">Gather information from the world</p>
            <div className="mt-6 bg-cyan-100 p-4 rounded-xl w-full">
                <p className="text-xl text-cyan-800 font-mono text-center">touching [mouse-pointer]?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}