export default function Step1CostumesSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-xl">1</div>
        <h2 className="text-5xl font-bold text-gray-800">Prepare the Cat's Costumes</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white border-4 border-blue-300 p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-blue-700 mb-6">Steps:</h3>
            <ol className="space-y-4 text-xl text-gray-700">
              <li className="flex items-start gap-4">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</span>
                <span>Click the cat sprite (<strong>Sprite1</strong>)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</span>
                <span>Go to the <strong>Costumes tab</strong> (top-right)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</span>
                <span>Rename the costumes</span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
            <h4 className="text-2xl font-bold text-blue-800 mb-3">📝 Why rename?</h4>
            <p className="text-xl text-gray-700">Clear names help you understand your code later — a sign of a great coder!</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Rename Costumes:</h3>
          
          <div className="space-y-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-mono line-through opacity-75">costume1</span>
                <span className="text-3xl">→</span>
                <span className="text-2xl font-mono font-bold">standing</span>
              </div>
              <p className="text-lg opacity-90">The default, standing pose</p>
            </div>

            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-mono line-through opacity-75">costume2</span>
                <span className="text-3xl">→</span>
                <span className="text-2xl font-mono font-bold">walking</span>
              </div>
              <p className="text-lg opacity-90">The walking animation pose</p>
            </div>
          </div>

          <div className="mt-8 bg-white bg-opacity-30 p-4 rounded-xl text-center">
            <p className="text-xl font-semibold">💡 Double-click the name to edit!</p>
          </div>
        </div>
      </div>
    </div>
  );
}