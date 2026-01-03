import { BookOpen } from 'lucide-react';

export default function WelcomeSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-8">
       <img 
        src="/logo.jpg" 
        alt="SMP ABBS Logo" 
        className="h-24 w-auto mb-8" 
      />
      <BookOpen className="w-24 h-24 text-blue-500 mb-6" />
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">PictoBlox Adventure</h1>
      <h2 className="text-4xl font-bold text-blue-600 mb-10">Level 7 - Stage 1</h2>
      <blockquote className="text-3xl italic text-gray-700 max-w-3xl px-6">
        &ldquo;You don't have to be a genius to code. You just have to be curious.&rdquo;
      </blockquote>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="bg-green-100 px-6 py-3 rounded-full text-green-700 font-semibold text-xl">
          🎮 Interactive Learning
        </div>
        <div className="bg-blue-100 px-6 py-3 rounded-full text-blue-700 font-semibold text-xl">
          🚀 Grade 7 SMP
        </div>
      </div>
    </div>
  );
}

