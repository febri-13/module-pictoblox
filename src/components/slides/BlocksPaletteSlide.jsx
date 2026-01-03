export default function BlocksPaletteSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-12">
      <h2 className="text-5xl font-bold text-gray-800 mb-2 text-center">🧩 The Blocks Palette</h2>
      <p className="text-2xl text-gray-600 mb-8 text-center">Color-coded tools for building your programs</p>
      
      {/* Grid 4 kolom di layar besar, 2 di layar kecil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 flex-grow">
        
        {/* Events */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white bg-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-200 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold">Events</h3>
          </div>
          <p className="text-lg mb-3 flex-grow">Start a script</p>
          <div className="bg-blue-700 bg-opacity-50 p-3 rounded-lg font-mono text-base mt-auto">
            when 🚩 clicked <br />
            when [space] key pressed
          </div>
        </div>

        {/* Motion */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white bg-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-200 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold">Motion</h3>
          </div>
          <p className="text-lg mb-3 flex-grow">Move & rotate sprites</p>
          <div className="bg-orange-700 bg-opacity-50 p-3 rounded-lg font-mono text-base mt-auto">
            move (10) steps <br />
            turn ↻ (15) degrees
          </div>
        </div>

        {/* Looks */}
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white bg-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-200 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold">Looks</h3>
          </div>
          <p className="text-lg mb-3 flex-grow">Change appearance</p>
          <div className="bg-purple-700 bg-opacity-50 p-3 rounded-lg font-mono text-base mt-auto">
            say [Hello!] for (2) secs <br />
            switch costume to [walk]
          </div>
        </div>

        {/* Sound */}
        <div className="bg-gradient-to-br from-red-400 to-red-600 text-white p-6 rounded-2xl shadow-xl flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white bg-opacity-30 rounded-lg w-10 h-10 flex items-center justify-center">
              <div className="w-6 h-6 bg-red-200 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold">Sound</h3>
          </div>
          <p className="text-lg mb-3 flex-grow">Play audio</p>
          <div className="bg-red-700 bg-opacity-50 p-3 rounded-lg font-mono text-base mt-auto">
            play sound [meow] <br />
            stop all sounds
          </div>
        </div>

      </div>

      <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl text-center">
        <p className="text-xl text-gray-700">💡 Blocks snap together like puzzle pieces — preventing mistakes!</p>
      </div>
    </div>
  );
}