export default function CoordinateSystemSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">The Coordinate System</h2>
      <p className="text-2xl text-gray-600 mb-8 text-center">Understanding the Map for Movement</p>
      
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-blue-800 mb-3">X-Axis (Horizontal)</h3>
            <p className="text-2xl text-gray-700">-240 (Left) to 240 (Right)</p>
          </div>

          <div className="bg-purple-100 border-l-8 border-purple-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-purple-800 mb-3">Y-Axis (Vertical)</h3>
            <p className="text-2xl text-gray-700">-180 (Bottom) to 180 (Top)</p>
          </div>

          <div className="bg-green-100 border-l-8 border-green-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-green-800 mb-3">Center Point</h3>
            <p className="text-2xl text-gray-700">(0, 0)</p>
          </div>

          <div className="bg-yellow-100 border-l-8 border-yellow-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-yellow-800 mb-3">Challenge</h3>
            <p className="text-2xl text-gray-700">Can you use a <strong>Repeat</strong> loop to make your sprite walk in a perfect square?</p>
            <p className="text-xl text-gray-600 mt-2">Hint: Move, Turn 90 degrees, Repeat 4 times.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 aspect-square w-full max-w-md relative">
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-300"></div> {/* X-axis */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300"></div> {/* Y-axis */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">0,0</div>
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 text-lg">240</div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-lg">-240</div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-lg">180</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg">-180</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div> {/* Center point */}
          </div>
        </div>
      </div>
    </div>
  );
}