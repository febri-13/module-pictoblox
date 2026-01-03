// src/InteractivePictoBloxModule.jsx
import React from 'react';
import { useEffect } from 'react';
import { useSlideNavigation } from './components/utils/useSlideNavigation';

// Import semua slide sebagai komponen
import WelcomeSlide from './components/slides/WelcomeSlide';
import IslamicValuesIntroSlide from './components/slides/IslamicValuesIntroSlide';
import LearningObjectivesSlide from './components/slides/LearningObjectivesSlide';
import GettingStartedSlide from './components/slides/GettingStartedSlide';
import TheStageSlide from './components/slides/TheStageSlide';
import SpriteListSlide from './components/slides/SpriteListSlide';
import BlocksPaletteSlide from './components/slides/BlocksPaletteSlide';
import ScriptsAreaSlide from './components/slides/ScriptsAreaSlide';
import QuizInterfaceSlide from './components/slides/QuizInterfaceSlide'; // NEW
import PracticeIntroSlide from './components/slides/PracticeIntroSlide';
import Step1CostumesSlide from './components/slides/Step1CostumesSlide';
import Step2RightArrowSlide from './components/slides/Step2RightArrowSlide';
import Step3LeftArrowSlide from './components/slides/Step3LeftArrowSlide';
import Step4ClickToSpeakSlide from './components/slides/Step4ClickToSpeakSlide';
import SavingSlide from './components/slides/SavingSlide';
import QuizCodingSlide from './components/slides/QuizCodingSlide'; // NEW
import ReflectionSlide from './components/slides/ReflectionSlide';
import ChallengesSlide from './components/slides/ChallengesSlide';
import FinalMessageSlide from './components/slides/FinalMessageSlide';

// Layout components
import SlideProgress from './components/layout/SlideProgress';
import SlideCounter from './components/layout/SlideCounter';
import MenuButton from './components/layout/MenuButton';
import NavButtons from './components/layout/NavButtons';
import SlideMenuOverlay from './components/layout/SlideMenuOverlay';
import KeyboardHint from './components/layout/KeyboardHint';

const slides = [
  { title: "Welcome", Component: WelcomeSlide },
  { title: "Islamic Values", Component: IslamicValuesIntroSlide },
  { title: "Learning Objectives", Component: LearningObjectivesSlide },
  { title: "Getting Started", Component: GettingStartedSlide },
  { title: "Interface: The Stage", Component: TheStageSlide },
  { title: "Interface: Sprite List", Component: SpriteListSlide },
  { title: "Interface: Blocks Palette", Component: BlocksPaletteSlide },
  { title: "Interface: Scripts Area", Component: ScriptsAreaSlide },
  { title: "🎯 Quiz: Interface", Component: QuizInterfaceSlide }, // NEW - Slide 8
  { title: "Hands-On Practice", Component: PracticeIntroSlide },
  { title: "Step 1: Prepare Costumes", Component: Step1CostumesSlide },
  { title: "Step 2: Right Arrow Movement", Component: Step2RightArrowSlide },
  { title: "Step 3: Left Arrow Movement", Component: Step3LeftArrowSlide },
  { title: "Step 4: Click to Speak", Component: Step4ClickToSpeakSlide },
  { title: "Saving Your Project", Component: SavingSlide },
  { title: "🎯 Quiz: Coding", Component: QuizCodingSlide }, // NEW - Slide 15
  { title: "Check Your Understanding", Component: ReflectionSlide },
  { title: "Extension Challenges", Component: ChallengesSlide },
  { title: "Congratulations!", Component: FinalMessageSlide },
];

const InteractivePictoBloxModule = () => {
  const { 
    currentSlide,
    completedSlides,
    showMenu,
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    markComplete,
    setShowMenu,
  } = useSlideNavigation(slides.length);

  const CurrentSlideComponent = slides[currentSlide].Component;
  
  // Check if current slide is a quiz
 
  const isQuizSlide = slides[currentSlide].title.includes('Quiz');
useEffect(() => {
  const handleQuizNavigation = (e) => {
    if (e.detail === 'prev') {
      prevSlide();
    } else if (e.detail === 'next') {
      nextSlide();
    }
  };

  window.addEventListener('navigate', handleQuizNavigation);
  return () => window.removeEventListener('navigate', handleQuizNavigation);
}, [prevSlide, nextSlide]);
  return (
    <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Progress bar */}
      <SlideProgress progress={((currentSlide + 1) / slides.length) * 100} />

      {/* Fixed UI */}
      <SlideCounter current={currentSlide + 1} total={slides.length} progress={progress} />
      <MenuButton onClick={() => setShowMenu(!showMenu)} />
      
      {/* Hide navigation buttons during quiz */}
      {!isQuizSlide && (
        <NavButtons 
          onPrev={prevSlide} 
          onNext={nextSlide} 
          onMarkComplete={markComplete}
          currentSlide={currentSlide}
          totalSlides={slides.length}
          isCompleted={completedSlides.has(currentSlide)}
        />
      )}
      
      {!isQuizSlide && <KeyboardHint />}

      {/* Slide Menu */}
      {showMenu && (
        <SlideMenuOverlay
          slides={slides}
          currentSlide={currentSlide}
          completedSlides={completedSlides}
          onClose={() => setShowMenu(false)}
          onSelect={goToSlide}
        />
      )}

      {/* Main Content */}
      <div className="h-full flex items-center justify-center p-4">
        <div className="w-full h-full max-w-[1400px] max-h-[900px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <CurrentSlideComponent />
        </div>
      </div>
    </div>
  );
};

export default InteractivePictoBloxModule;