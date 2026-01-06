export default function LogicBlocksSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">The Logic Blocks (Operators - Green)</h2>
      <p className="text-2xl text-gray-600 mb-8 text-center">They answer Yes/No questions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Greater Than */}
        <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center font-mono bg-white bg-opacity-20 p-3 rounded-lg"> &gt; </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Greater Than</h3>
          <p className="text-lg mb-3 flex-grow text-center">Is Score &gt; 10?</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Example: <span className="font-mono">if &lt;score &gt; 50&gt; then</span>
          </div>
        </div>

        {/* Less Than */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center font-mono bg-white bg-opacity-20 p-3 rounded-lg"> &lt; </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Less Than</h3>
          <p className="text-lg mb-3 flex-grow text-center">Is Timer &lt; 0?</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Example: <span className="font-mono">if &lt;timer &lt; 1&gt; then</span>
          </div>
        </div>

        {/* Equal To */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="text-5xl mb-4 text-center font-mono bg-white bg-opacity-20 p-3 rounded-lg"> = </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Equal To</h3>
          <p className="text-lg mb-3 flex-grow text-center">Does Lives = 0?</p>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center text-sm">
            Example: <span className="font-mono">if &lt;lives = 0&gt; then</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl text-center">
        <p className="text-xl text-gray-700">💡 These blocks go inside <strong>If-Then</strong> blocks!</p>
      </div>
    </div>
  );
}