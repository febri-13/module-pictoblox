import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

// Import slides
import WelcomeSlide from './slides/WelcomeSlide';
import IslamicValuesIntroSlide from './slides/IslamicValuesIntroSlide';
import LearningObjectivesSlide from './slides/LearningObjectivesSlide';
import GettingStartedSlide from './slides/GettingStartedSlide';
import TheStageSlide from './slides/TheStageSlide';
import SpriteListSlide from './slides/SpriteListSlide';
import BlocksPaletteSlide from './slides/BlocksPaletteSlide';
import ScriptsAreaSlide from './slides/ScriptsAreaSlide';
import QuizSlide from './slides/QuizSlide';
import PracticeIntroSlide from './slides/PracticeIntroSlide';
import Step1CostumesSlide from './slides/Step1CostumesSlide';
import Step2RightArrowSlide from './slides/Step2RightArrowSlide';
import Step3LeftArrowSlide from './slides/Step3LeftArrowSlide';
import Step4ClickToSpeakSlide from './slides/Step4ClickToSpeakSlide';
import SavingSlide from './slides/SavingSlide';
import ReflectionSlide from './slides/ReflectionSlide';
import ChallengesSlide from './slides/ChallengesSlide';
import FinalMessageSlide from './slides/FinalMessageSlide';


export default function Chapter1Module({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 18));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const markComplete = useCallback(() => {
    setCompletedSlides((prev) => new Set(prev).add(currentSlide));
  }, [currentSlide]);

  // Slide configuration
  const slideConfig = [
      { title: 'Welcome to PictoBlox!', render: () => <WelcomeSlide /> },
      { title: 'Islamic Values', render: () => <IslamicValuesIntroSlide /> },
      { title: 'Learning Objectives', render: () => <LearningObjectivesSlide /> },
      { title: 'Getting Started', render: () => <GettingStartedSlide /> },
      { title: 'The Stage', render: () => <TheStageSlide /> },
      { title: 'Sprite List & Info', render: () => <SpriteListSlide /> },
      { title: 'Blocks Palette', render: () => <BlocksPaletteSlide /> },
      { title: 'Scripts Area', render: () => <ScriptsAreaSlide /> },
      { 
        title: 'Quiz: Interface', 
        render: () => <QuizSlide 
          quizId="quiz-interface" 
          onNext={nextSlide}  // ✅ Sekarang sudah terdefinisi!
          onPrev={prevSlide}  // ✅ Sekarang sudah terdefinisi!
        /> 
      },
      { title: 'Practice Time!', render: () => <PracticeIntroSlide /> },
      { title: 'Step 1: Costumes', render: () => <Step1CostumesSlide /> },
      { title: 'Step 2: Right Arrow', render: () => <Step2RightArrowSlide /> },
      { title: 'Step 3: Left Arrow', render: () => <Step3LeftArrowSlide /> },
      { title: 'Step 4: Click to Speak', render: () => <Step4ClickToSpeakSlide /> },
      { title: 'Saving Your Project', render: () => <SavingSlide /> },
      { 
        title: 'Quiz: Coding', 
        render: () => <QuizSlide 
          quizId="quiz-coding" 
          onNext={nextSlide}  // ✅ Sekarang sudah terdefinisi!
          onPrev={prevSlide}  // ✅ Sekarang sudah terdefinisi!
        /> 
      },
      { title: 'Reflection', render: () => <ReflectionSlide /> },
      { title: 'Challenges', render: () => <ChallengesSlide /> },
      { title: 'Congratulations!', render: () => <FinalMessageSlide /> },
    ];

  const progress = ((currentSlide + 1) / slideConfig.length) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') {
        if (showMenu) setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, showMenu]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      
      {/* Header with Back Button */}
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack} // ← NEW: Pass back function
        chapterTitle="Chapter 1" // ← NEW: Display chapter
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fadeIn">
              {slideConfig[currentSlide].render()}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <SlideMenuSidebar
        slides={slideConfig}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

      {/* Mark Complete Button */}
      <button
        onClick={markComplete}
        className={`hidden md:block fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg font-semibold transition-all transform hover:scale-105 z-30 ${
          completedSlides.has(currentSlide)
            ? 'bg-green-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {completedSlides.has(currentSlide) ? '✓ Completed' : 'Mark Complete'}
      </button>
    </div>
  );
}