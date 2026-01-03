export default function Step3LeftArrowSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-xl">3</div>
        <h2 className="text-5xl font-bold text-gray-800">Duplicate for Left Arrow</h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white border-4 border-orange-400 p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-orange-700 mb-6">How to Duplicate:</h3>
          <div className="space-y-6">
            <div className="bg-orange-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">1</span>
                <p className="text-2xl text-gray-800">Right-click the script</p>
              </div>
            </div>
            <div className="bg-orange-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">2</span>
                <p className="text-2xl text-gray-800">Click <strong>"Duplicate"</strong></p>
              </div>
            </div>
            <div className="bg-orange-100 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">3</span>
                <p className="text-2xl text-gray-800">Edit the copy!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Change These Parts:</h3>
            <div className="space-y-3">
              <div className="bg-blue-400 px-6 py-3 rounded-xl font-mono text-lg text-gray-900 font-semibold">
                when [<span className="text-red-600 font-bold">← arrow</span>] key pressed
              </div>
              <div className="bg-orange-400 px-6 py-3 rounded-xl font-mono text-lg text-gray-900 font-semibold ml-8">
                move <span className="bg-red-600 text-white px-3 py-1 rounded text-xl">(-10)</span> steps
              </div>
              <p className="text-white text-xl ml-8">↑ Negative = move left!</p>
            </div>
          </div>

          <div className="bg-green-100 border-4 border-green-400 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-4">🎯 Test Time!</h3>
            <p className="text-2xl text-gray-700 mb-4">Press → and ← arrows</p>
            <div className="text-6xl mb-3">⬅️ 🐱 ➡️</div>
            <p className="text-xl text-green-700 font-bold">Codie walks and animates!</p>
          </div>
        </div>
      </div>
    </div>
  );
}