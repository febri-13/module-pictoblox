export default function PracticeIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-12">
      <div className="text-9xl mb-8 animate-bounce">🐾</div>
      <h1 className="text-6xl font-bold mb-6 text-gray-800">
        Codie the Cat Goes for a Walk
      </h1>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-2xl shadow-2xl max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">🎯 Your Mission:</h2>
        <p className="text-3xl">
          Make the cat walk left/right with arrow keys, change costume, and play sound!
        </p>
      </div>
      <div className="mt-12 flex gap-6">
        <div className="bg-blue-100 px-8 py-4 rounded-full text-blue-700 font-semibold text-xl">
          ⌨️ Arrow Keys
        </div>
        <div className="bg-purple-100 px-8 py-4 rounded-full text-purple-700 font-semibold text-xl">
          👔 Costumes
        </div>
        <div className="bg-pink-100 px-8 py-4 rounded-full text-pink-700 font-semibold text-xl">
          🔊 Sounds
        </div>
      </div>
    </div>
  );
}