export default function Step2RightArrowSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-xl">2</div>
        <h2 className="text-5xl font-bold text-gray-800">Code Right Arrow Movement</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6">The Script:</h3>
          <div className="space-y-3">
            <div className="bg-blue-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold">
              when [→ arrow] key pressed
            </div>
            <div className="bg-red-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
              play sound [meow] until done
            </div>
            <div className="bg-purple-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
              switch costume to [walking]
            </div>
            <div className="bg-orange-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
              move (10) steps
            </div>
            <div className="bg-green-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
              wait (0.1) seconds
            </div>
            <div className="bg-purple-400 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
              switch costume to [standing]
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-yellow-100 border-4 border-yellow-400 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">🔧 Where to find blocks:</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-blue-600">[→ arrow]:</strong> Events → when [key] pressed → dropdown
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-red-600">play sound:</strong> Sound category
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-green-600">wait:</strong> Control → change 1 to 0.1
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">✨ What happens:</h3>
            <ol className="space-y-2 text-lg">
              <li>1. Press → arrow key</li>
              <li>2. Cat says "meow"</li>
              <li>3. Changes to walking costume</li>
              <li>4. Moves 10 steps right</li>
              <li>5. Brief pause (0.1 sec)</li>
              <li>6. Back to standing costume</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}