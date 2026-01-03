import { Target, CheckCircle, Lightbulb } from 'lucide-react';

export default function LearningObjectivesSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Target className="w-16 h-16 text-blue-500" />
        <h2 className="text-5xl font-bold text-gray-800">Learning Objectives</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8">By the end of this stage (1-2 weeks), you will be able to:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Access PictoBlox</h3>
          <p className="text-lg">Run PictoBlox directly from your web browser at pictoblox.ai</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Master Interface</h3>
          <p className="text-lg">Identify Stage, Sprite List, Blocks Palette, and Scripts Area</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Use Basic Blocks</h3>
          <p className="text-lg">Events, Motion, Looks, and Sound categories</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Create Interactive Sprite</h3>
          <p className="text-lg">With movement, costumes, sounds, and interactions</p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
        <p className="text-xl text-gray-700 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <span>This follows the official Grade 7 roadmap using <strong>Scratch Mode</strong> (not Python yet!)</span>
        </p>
      </div>
    </div>
  );
}