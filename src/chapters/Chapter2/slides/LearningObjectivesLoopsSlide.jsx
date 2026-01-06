import { Target, CheckCircle, Lightbulb } from 'lucide-react';

export default function LearningObjectivesLoopsSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Target className="w-16 h-16 text-blue-500" />
        <h2 className="text-5xl font-bold text-gray-800">Learning Objectives</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8">By the end of this chapter (1 week), you will be able to:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Understand Why Loops</h3>
          <p className="text-lg">Explain why programmers use loops to save time</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Differentiate Loop Types</h3>
          <p className="text-lg">Distinguish between Finite and Infinite loops</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Create Animations</h3>
          <p className="text-lg">Use loops to create smooth character animations</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Mini Project</h3>
          <p className="text-lg">Build a "Walking & Talking" character</p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
        <p className="text-xl text-gray-700 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <span>Loops are the foundation for creating games and interactive stories!</span>
        </p>
      </div>
    </div>
  );
}