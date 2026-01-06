import { Target, CheckCircle, Lightbulb } from 'lucide-react';

export default function LearningObjectivesConditionalsSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="flex items-center gap-4 mb-8">
        <Target className="w-16 h-16 text-red-500" />
        <h2 className="text-5xl font-bold text-gray-800">Learning Objectives</h2>
      </div>
      <p className="text-2xl text-gray-600 mb-8">By the end of this chapter (1-2 weeks), you will be able to:</p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Boolean Logic</h3>
          <p className="text-lg">Understand True or False questions (Yes/No logic)</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Use Sensing Blocks</h3>
          <p className="text-lg">Detect mouse, keys, colors, and collisions</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">If-Then Blocks</h3>
          <p className="text-lg">Control game rules with conditional logic</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
          <CheckCircle className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Final Project</h3>
          <p className="text-lg">Build the "Catch the Fruit" Game</p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
        <p className="text-xl text-gray-700 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <span>Conditionals are the brain of interactive games and stories!</span>
        </p>
      </div>
    </div>
  );
}