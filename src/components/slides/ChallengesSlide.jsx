export default function ChallengesSlide() {
  return (
    <div className="h-full flex flex-col justify-center py-8 px-6 sm:px-8 md:px-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 text-center">
        🧪 Try These Extensions!
      </h2>
      <p className="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8 text-center">
        Pick 1-2 to challenge yourself
      </p>

      {/* Grid: 1 kolom di mobile, 2 di tablet, 4 di desktop besar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 flex-grow" >
        
        {/* Challenge 1 */}
        <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white rounded-2xl shadow-xl flex flex-col transition-all duration-200 hover:scale-[1.03]"> {/* Ganti hover:scale-105 */}
          <div className="text-4xl sm:text-5xl p-4 text-center"> {/* Kurangi ukuran emoji dan padding */}
            🎨
          </div>
          <h3 className="text-lg sm:text-xl font-bold px-4"> {/* Kurangi ukuran teks judul */}
            Change Background
          </h3>
          <p className="text-sm sm:text-base px-4 py-2 flex-grow"> {/* Kurangi ukuran teks deskripsi dan gunakan py-2 */}
            Click Stage → Backdrops tab → choose blue sky or park
          </p>
          <div className="bg-white bg-opacity-30 px-3 py-1 rounded-lg text-center text-xs sm:text-sm font-semibold self-center mb-2"> {/* Kurangi ukuran teks difficulty dan padding bawah card */}
            Difficulty: ⭐
          </div>
        </div>

        {/* Challenge 2 */}
        <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-2xl shadow-xl flex flex-col transition-all duration-200 hover:scale-[1.03]">
          <div className="text-4xl sm:text-5xl p-4 text-center">
            🦅
          </div>
          <h3 className="text-lg sm:text-xl font-bold px-4">
            Add a Flying Bird
          </h3>
          <p className="text-sm sm:text-base px-4 py-2 flex-grow">
            + Sprite → pick bird → make it fly with forever + move (5) + if on edge, bounce
          </p>
          <div className="bg-white bg-opacity-30 px-3 py-1 rounded-lg text-center text-xs sm:text-sm font-semibold self-center mb-2">
            Difficulty: ⭐⭐
          </div>
        </div>

        {/* Challenge 3 */}
        <div className="bg-gradient-to-br from-purple-400 to-indigo-500 text-white rounded-2xl shadow-xl flex flex-col transition-all duration-200 hover:scale-[1.03]">
          <div className="text-4xl sm:text-5xl p-4 text-center">
            ⚖️
          </div>
          <h3 className="text-lg sm:text-xl font-bold px-4">
            Grow on SPACE
          </h3>
          <p className="text-sm sm:text-base px-4 py-2 flex-grow">
            When space pressed → change size by (20) → wait (0.5) → change size by (-20)
          </p>
          <div className="bg-white bg-opacity-30 px-3 py-1 rounded-lg text-center text-xs sm:text-sm font-semibold self-center mb-2">
            Difficulty: ⭐⭐
          </div>
        </div>

        {/* Challenge 4 */}
        <div className="bg-gradient-to-br from-orange-400 to-yellow-500 text-white rounded-2xl shadow-xl flex flex-col transition-all duration-200 hover:scale-[1.03]">
          <div className="text-4xl sm:text-5xl p-4 text-center">
            🎵
          </div>
          <h3 className="text-lg sm:text-xl font-bold px-4">
            Record Your Sound
          </h3>
          <p className="text-sm sm:text-base px-4 py-2 flex-grow">
            Sounds tab → + → Record → say "Step!" → save as footstep
          </p>
          <div className="bg-white bg-opacity-30 px-3 py-1 rounded-lg text-center text-xs sm:text-sm font-semibold self-center mb-2">
            Difficulty: ⭐
          </div>
        </div>

      </div>
    </div>
  );
}