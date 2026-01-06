import { Binary } from 'lucide-react';

export default function BooleanLogicSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Binary className="w-16 h-16 text-blue-500" />
        <h2 className="text-5xl font-bold text-gray-800">Boolean Logic (True or False?)</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-blue-800 mb-3">How Computers Think</h3>
            <p className="text-2xl text-gray-700">Computers make decisions based on questions with only 2 answers:</p>
            <ul className="text-2xl text-gray-700 mt-4 space-y-2">
              <li>✅ <strong>True</strong> (Yes)</li>
              <li>❌ <strong>False</strong> (No)</li>
            </ul>
          </div>

          <div className="bg-purple-100 border-l-8 border-purple-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-purple-800 mb-3">In PictoBlox</h3>
            <p className="text-2xl text-gray-700">These are the <strong>Hexagonal (Diamond-shaped)</strong> blocks!</p>
          </div>

          <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-green-800 mb-3">Real Life Example</h3>
            <p className="text-xl text-gray-700">"Is it raining outside?" → Yes (True) or No (False)</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-12 aspect-video flex flex-col items-center justify-center">
            <div className="text-8xl mb-4">❓</div>
            <p className="text-3xl font-bold text-gray-600 text-center">YES / NO</p>
            <p className="text-xl text-gray-500 mt-2 text-center">True or False?</p>
            <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                <div className="bg-green-200 p-4 rounded-lg text-center font-bold text-green-800">TRUE</div>
                <div className="bg-red-200 p-4 rounded-lg text-center font-bold text-red-800">FALSE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}