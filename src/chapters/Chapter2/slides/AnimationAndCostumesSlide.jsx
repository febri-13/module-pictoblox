export default function AnimationAndCostumesSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Animation & Costumes</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">How Animation Works</h3>
            <p className="text-xl">It's just switching pictures (Costumes) very fast!</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li>• Go to the Costumes tab</li>
              <li>• See your sprite's different poses</li>
              <li>• Use the <strong>Next Costume</strong> block</li>
            </ul>
          </div>

          <div className="bg-white border-4 border-blue-300 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Crucial Tip:</h3>
            <p className="text-xl text-gray-700 mb-2">Computers are too fast! If you just use <strong>Forever</strong> + <strong>Next Costume</strong>, the sprite will look like it's having a seizure.</p>
            <p className="text-2xl font-bold text-red-600">You must add a <strong>Wait (0.1) seconds</strong> block!</p>
          </div>
        </div>

        <div className="bg-white border-4 border-purple-300 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">The Perfect Animation Script</h3>
          
          <div className="space-y-3 bg-gray-800 rounded-xl p-4 font-mono text-lg text-white">
            <div className="bg-blue-400 px-4 py-2 rounded-lg">when [Green Flag] clicked</div>
            <div className="bg-purple-500 px-4 py-2 rounded-lg ml-6">forever</div>
            <div className="bg-pink-400 px-4 py-2 rounded-lg ml-12">next costume</div>
            <div className="bg-orange-400 px-4 py-2 rounded-lg ml-12">move (10) steps</div>
            <div className="bg-yellow-400 px-4 py-2 rounded-lg ml-12">if on edge, bounce</div>
            <div className="bg-green-400 px-4 py-2 rounded-lg ml-12">wait (0.1) seconds</div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-xl text-center">
            <p className="text-xl font-bold">✅ This creates a smooth, endless animation!</p>
          </div>
        </div>
      </div>
    </div>
  );
}