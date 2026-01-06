import { GitBranch } from 'lucide-react';

export default function IfThenStructureSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <GitBranch className="w-16 h-16 text-green-500" />
        <h2 className="text-5xl font-bold text-gray-800">The "If-Then" Structure</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8 text-center">This is the brain of your code!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Structure A */}
        <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Structure A: Simple Decision</h3>
          <p className="text-xl mb-4">"If it is raining, take an umbrella."</p>

          <div className="bg-white bg-opacity-20 p-6 rounded-xl font-mono text-lg space-y-2">
            <div className="flex items-center">
              <div className="bg-green-400 px-4 py-2 rounded-lg mr-2">If</div>
              <div className="bg-red-400 px-4 py-2 rounded-lg mr-2">&lt;key [space] pressed?&gt;</div>
              <div className="bg-green-400 px-4 py-2 rounded-lg">then</div>
            </div>
            <div className="ml-12 bg-purple-400 px-4 py-2 rounded-lg">change y by (10) (Jump)</div>
          </div>
        </div>

        {/* Structure B */}
        <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Structure B: Split Decision (If-Else)</h3>
          <p className="text-xl mb-4">"If it is raining, take an umbrella. ELSE (if not), wear sunglasses."</p>

          <div className="bg-white bg-opacity-20 p-6 rounded-xl font-mono text-lg space-y-2">
            <div className="flex items-center">
              <div className="bg-green-400 px-4 py-2 rounded-lg mr-2">If</div>
              <div className="bg-red-400 px-4 py-2 rounded-lg mr-2">&lt;score &gt; 50&gt;</div>
              <div className="bg-green-400 px-4 py-2 rounded-lg">then</div>
            </div>
            <div className="ml-12 bg-blue-400 px-4 py-2 rounded-lg">say [You Win!]</div>
            <div className="flex items-center ml-12">
              <div className="bg-yellow-400 px-4 py-2 rounded-lg mr-2">Else</div>
            </div>
            <div className="ml-12 bg-orange-400 px-4 py-2 rounded-lg">say [Keep Trying!]</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl text-center">
        <p className="text-xl text-gray-700">💡 Remember: Sensing blocks usually go inside the diamond (&lt;&gt;) part!</p>
      </div>
    </div>
  );
}