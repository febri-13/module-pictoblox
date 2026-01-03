export default function TheStageSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">🎬 The Stage</h2>
      
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-blue-800 mb-3">What is it?</h3>
            <p className="text-2xl text-gray-700">The main <strong>480 × 360 pixel screen</strong> where your story unfolds</p>
          </div>

          <div className="bg-purple-100 border-l-8 border-purple-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-purple-800 mb-3">What happens here?</h3>
            <ul className="text-2xl text-gray-700 space-y-2">
              <li>• Sprites move and interact</li>
              <li>• Characters talk and act</li>
              <li>• Your story comes alive!</li>
            </ul>
          </div>

          <div className="bg-orange-100 border-l-8 border-orange-500 p-6 rounded-r-2xl">
            <h3 className="text-3xl font-bold text-orange-800 mb-3">Customize it!</h3>
            <p className="text-2xl text-gray-700">Click <strong>Stage → Backdrops tab</strong> to change background</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-12 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🎭</div>
              <p className="text-3xl font-bold text-gray-600">The Stage</p>
              <p className="text-xl text-gray-500 mt-2">480 × 360 pixels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}