export default function The3KingsOfLoopsSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">The 3 Kings of Loops</h2>
      <p className="text-2xl text-gray-600 mb-8 text-center">From the Control Category</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Forever */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center">🔄</div>
          <h3 className="text-2xl font-bold mb-3 text-center">forever</h3>
          <p className="text-lg mb-3 flex-grow text-center">Runs code endlessly until stopped</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Real Life: Earth's rotation (never stops)
          </div>
        </div>

        {/* Repeat */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center">1️⃣2️⃣3️⃣</div>
          <h3 className="text-2xl font-bold mb-3 text-center">repeat (10)</h3>
          <p className="text-lg mb-3 flex-grow text-center">Runs code a specific number of times</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Real Life: Doing 10 push-ups
          </div>
        </div>

        {/* Repeat Until */}
        <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center">🏁</div>
          <h3 className="text-2xl font-bold mb-3 text-center">repeat until &lt;&gt;</h3>
          <p className="text-lg mb-3 flex-grow text-center">Runs code until a specific condition happens</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Real Life: Boiling water until it bubbles
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl text-center">
        <p className="text-xl text-gray-700">💡 Use the right loop for the right job!</p>
      </div>
    </div>
  );
}