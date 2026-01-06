import { Lightbulb, CheckCircle } from 'lucide-react';

export default function ConditionalsReflectionSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-6xl font-bold text-gray-800 mb-8 text-center">🧠 Check Your Understanding</h2>

      <div className="grid gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="bg-white text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold flex-shrink-0">1</div>
            <div>
              <p className="text-3xl font-semibold">What is the difference between <span className="bg-white bg-opacity-30 px-4 py-2 rounded-lg font-mono">=</span> and <span className="bg-white bg-opacity-30 px-4 py-2 rounded-lg font-mono">&lt;</span> blocks?</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="bg-white text-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold flex-shrink-0">2</div>
            <div>
              <p className="text-3xl font-semibold">Why is it important to put <span className="bg-white bg-opacity-30 px-4 py-2 rounded-lg font-mono">If</span> blocks inside a <span className="bg-white bg-opacity-30 px-4 py-2 rounded-lg font-mono">Forever</span> loop for games?</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="bg-white text-orange-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold flex-shrink-0">3</div>
            <div>
              <p className="text-3xl font-semibold">How would you write an If-Then statement in PictoBlox to make a sprite say "Game Over" when its lives are less than 1?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-100 border-4 border-green-400 rounded-2xl p-6 text-center">
        <p className="text-2xl text-gray-700 font-semibold flex items-center justify-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-600" />
          Discuss these with your classmates or teacher!
        </p>
      </div>
    </div>
  );
}