export default function Step4ClickToSpeakSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-xl">4</div>
        <h2 className="text-5xl font-bold text-gray-800">Add Click-to-Speak Feature</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">New Script (Separate!):</h3>
            <div className="space-y-3">
              <div className="bg-blue-300 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold">
                when this sprite clicked
              </div>
              <div className="bg-purple-300 px-6 py-4 rounded-xl font-mono text-xl text-gray-900 font-semibold ml-8">
                say [Hi! I'm Codie 😺] for (2) seconds
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-8 border-yellow-500 p-6 rounded-r-2xl">
            <p className="text-xl text-gray-700">
              💡 <strong>Tip:</strong> Don't attach this to the arrow scripts — keep it separate!
            </p>
          </div>
        </div>

        <div className="bg-white border-4 border-pink-400 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-pink-700 mb-6 text-center">✨ Try Different Messages!</h3>
          
          <div className="space-y-4">
            <div className="bg-pink-100 p-6 rounded-xl border-2 border-pink-300">
              <p className="text-2xl font-mono text-gray-800">"Teach me a new trick!"</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl border-2 border-purple-300">
              <p className="text-2xl font-mono text-gray-800">"Race me!"</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
              <p className="text-2xl font-mono text-gray-800">"Let's code together!"</p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">🖱️ Click Codie — he talks!</p>
          </div>
        </div>
      </div>
    </div>
  );
}