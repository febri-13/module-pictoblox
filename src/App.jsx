// src/App.jsx - Chapter Selector
import { useState } from 'react';
import { BookOpen, Code, Zap, Lock } from 'lucide-react';

// Import chapter modules
import Chapter1Module from './chapters/Chapter1/Chapter1Module';
import Chapter2Module from './chapters/Chapter2/Chapter2Module'; 
import Chapter3Module from './chapters/Chapter3/Chapter3Module';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(null);

  // Chapter configuration
  const chapters = [
    {
      id: 1,
      title: 'Welcome to Coding',
      subtitle: 'PictoBlox Basics & First Project',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-600',
      description: 'Learn interface, blocks, and create your first interactive sprite',
      duration: '1-2 weeks',
      completed: false, // Set based on localStorage or progress tracking
      locked: false
    },
    {
      id: 2,
      title: 'Loops & Repetition',
      subtitle: 'Making Code Efficient',
      icon: Code,
      color: 'from-green-500 to-cyan-600',
      description: 'Master forever loops, repeat blocks, and create animations',
      duration: '1-2 weeks',
      completed: false,
      locked: false // Set to true if you want sequential unlocking
    },
    {
      id: 3,
      title: 'Conditionals & Logic',
      subtitle: 'Making Smart Decisions',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      description: 'Use if-then blocks to create interactive games',
      duration: '2 weeks',
      completed: false,
      locked: false // Locked until Chapter 2 is completed
    }
  ];

  // Render chapter module
  if (currentChapter === 1) {
    return <Chapter1Module onBack={() => setCurrentChapter(null)} />;
  }
  
  if (currentChapter === 2) {
    return <Chapter2Module onBack={() => setCurrentChapter(null)} />;
  }

  if (currentChapter === 3) {
    return <Chapter3Module onBack={() => setCurrentChapter(null)} />;
  }

  // Chapter Selection Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-6">
          <img 
            src="/logo.webp" 
            alt="SMP ABBS Logo" 
            className="h-16 sm:h-20 w-auto mx-auto mb-4"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            PictoBlox Adventure
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Level 7 - Choose Your Chapter
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-800">Your Progress</h2>
            <span className="text-sm text-gray-600">
              {chapters.filter(c => c.completed).length} / {chapters.length} Chapters
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(chapters.filter(c => c.completed).length / chapters.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <button
              key={chapter.id}
              onClick={() => !chapter.locked && setCurrentChapter(chapter.id)}
              disabled={chapter.locked}
              className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all transform hover:scale-105 text-left ${
                chapter.locked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl'
              }`}
            >
              {/* Lock Badge */}
              {chapter.locked && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-6 h-6 text-gray-400" />
                </div>
              )}

              {/* Completed Badge */}
              {chapter.completed && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                  ✓ Done
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Chapter {chapter.id}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  {chapter.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {chapter.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    📅 {chapter.duration}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className={`text-center py-2 rounded-lg font-semibold ${
                chapter.locked 
                  ? 'bg-gray-200 text-gray-500' 
                  : chapter.completed
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              }`}>
                {chapter.locked ? 'Locked' : chapter.completed ? 'Review' : 'Start Learning'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-8 text-center text-gray-600 text-sm">
        <p>🎓 Complete chapters in order to unlock new content</p>
      </div>
    </div>
  );
}