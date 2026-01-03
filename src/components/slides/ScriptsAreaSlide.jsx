export default function ScriptsAreaSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">📝 The Scripts Area</h2>
      
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">What is it?</h3>
            <p className="text-2xl">The white workspace where you build your programs</p>
          </div>

          <div className="bg-white border-4 border-blue-300 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">How to use:</h3>
            <ul className="text-xl text-gray-700 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">1.</span>
                <span> <strong>Drag</strong> blocks from the palette</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">2.</span>
                <span> <strong>Snap</strong> them together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">3.</span>
                <span> <strong>Run</strong> your program!</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-100 border-l-8 border-purple-500 p-6 rounded-r-2xl">
            <p className="text-xl text-gray-700">
              ⚡ Each sprite has its <strong>own</strong> scripts — they can act independently!
            </p>
          </div>
        </div>

        <div className="bg-white border-4 border-green-400 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔥 Try It Now!</h3>
          
          <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
              <div className="bg-blue-200 px-4 py-3 rounded-lg flex-1 font-mono text-lg">
                when 🚩 clicked
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
              <div className="bg-orange-200 px-4 py-3 rounded-lg flex-1 font-mono text-lg">
                move (10) steps
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
              <p className="text-lg text-gray-700">Click the cat on Stage</p>
            </div>
          </div>

          <div className="mt-6 bg-green-100 border-2 border-green-400 p-4 rounded-xl text-center">
            <p className="text-2xl font-bold text-green-800">✅ First Program Complete!</p>
          </div>
        </div>
      </div>
    </div>
  );
}