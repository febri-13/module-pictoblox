import { useState, useEffect, useCallback } from 'react';

// Import komponen layout
import Header from './components/layout/Header';
import SlideMenuSidebar from './components/layout/SlideMenuSidebar';

// Import slide components
import WelcomeSlide from './components/slides/WelcomeSlide';
import IslamicValuesIntroSlide from './components/slides/IslamicValuesIntroSlide';
import LearningObjectivesSlide from './components/slides/LearningObjectivesSlide';
import GettingStartedSlide from './components/slides/GettingStartedSlide';
import TheStageSlide from './components/slides/TheStageSlide';
import SpriteListSlide from './components/slides/SpriteListSlide';
import BlocksPaletteSlide from './components/slides/BlocksPaletteSlide';
import ScriptsAreaSlide from './components/slides/ScriptsAreaSlide';
import QuizSlide from './components/slides/QuizSlide';
import PracticeIntroSlide from './components/slides/PracticeIntroSlide';
import Step1CostumesSlide from './components/slides/Step1CostumesSlide';
import Step2RightArrowSlide from './components/slides/Step2RightArrowSlide';
import Step3LeftArrowSlide from './components/slides/Step3LeftArrowSlide';
import Step4ClickToSpeakSlide from './components/slides/Step4ClickToSpeakSlide';
import SavingSlide from './components/slides/SavingSlide';
import ReflectionSlide from './components/slides/ReflectionSlide';
import ChallengesSlide from './components/slides/ChallengesSlide';
import FinalMessageSlide from './components/slides/FinalMessageSlide';

export default function InteractivePictoBloxModule() {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Navigation functions with useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 18)); // Total 19 slides (0-18)
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

  // ✅ SOLUSI: Slide configuration dengan FUNCTION untuk render component
  // Ini memastikan nextSlide/prevSlide sudah tersedia saat component di-render
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

  // Calculate progress
  const progress = ((currentSlide + 1) / slideConfig.length) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        if (showMenu) {
          setShowMenu(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, showMenu]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      
      {/* Header Modern */}
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length}
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
      />

      {/* Main Content Area - SCROLLABLE di mobile */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* ✅ Render current slide dengan memanggil function */}
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

      {/* Mark Complete Button - HIDDEN di mobile (< 768px) */}
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