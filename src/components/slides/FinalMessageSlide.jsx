export default function FinalMessageSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center pb-12 px-12">
      <div className="text-9xl mb-8 animate-bounce">🌟</div>
      <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Congratulations!
      </h1>
      <h2 className="text-4xl font-semibold text-gray-700 mb-4">
        You've Completed Stage 1!
      </h2>
      
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-10 rounded-3xl shadow-2xl max-w-4xl mb-8">
        <p className="text-3xl leading-relaxed">
          "Coding is about <strong>experimenting</strong>. If something breaks — great! Now you get to fix it. That's how you learn."
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-100 p-6 rounded-2xl">
          <div className="text-5xl mb-3">✅</div>
          <p className="text-xl font-semibold text-gray-800">Interface Mastered</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl">
          <div className="text-5xl mb-3">🎨</div>
          <p className="text-xl font-semibold text-gray-800">First Project Created</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-2xl">
          <div className="text-5xl mb-3">🚀</div>
          <p className="text-xl font-semibold text-gray-800">Ready for Stage 2</p>
        </div>
      </div>

      <p className="text-2xl text-gray-600 mt-12">Keep exploring and happy coding! 💻✨</p>
    </div>
  );
}