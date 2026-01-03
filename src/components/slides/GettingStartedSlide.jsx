import { Globe } from 'lucide-react';

export default function GettingStartedSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Globe className="w-16 h-16 text-green-500" />
        <h2 className="text-5xl font-bold text-gray-800">Getting Started</h2>
      </div>

      <div className="bg-green-50 border-2 border-green-300 p-8 rounded-2xl mb-8">
        <h3 className="text-3xl font-bold text-green-800 mb-4">🎉 Good News!</h3>
        <p className="text-2xl text-gray-700">
          You don't need to download or install anything — just a modern browser and internet access.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border-4 border-blue-300 p-6 rounded-2xl shadow-lg">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">1</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Open Browser</h3>
          <p className="text-lg text-gray-600 mb-3">Go to:</p>
          <div className="bg-blue-100 p-3 rounded-lg">
            <a href="https://pictoblox.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-xl break-all">
              pictoblox.ai
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-2 italic">(May take 10-30 seconds to load)</p>
        </div>

        <div className="bg-white border-4 border-purple-300 p-6 rounded-2xl shadow-lg">
          <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">2</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Create Project</h3>
          <p className="text-lg text-gray-600">Click on:</p>
          <div className="bg-purple-100 p-4 rounded-lg mt-3">
            <p className="text-purple-800 font-bold text-xl">"Create New Project"</p>
          </div>
        </div>

        <div className="bg-white border-4 border-orange-300 p-6 rounded-2xl shadow-lg">
          <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">3</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Choose Mode</h3>
          <p className="text-lg text-gray-600">Select:</p>
          <div className="bg-orange-100 p-4 rounded-lg mt-3">
            <p className="text-orange-800 font-bold text-xl">Scratch Mode</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Visual, drag-and-drop blocks!</p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl text-center">
        <p className="text-2xl font-bold">✅ You're now in the PictoBlox editor! Let's explore.</p>
      </div>
    </div>
  );
}