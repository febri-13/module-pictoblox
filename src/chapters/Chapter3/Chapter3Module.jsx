// src/chapters/Chapter3/Chapter3Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

// --- Import semua slide untuk Bab 3 ---
import ConditionalsIntroSlide from './slides/ConditionalsIntroSlide';
import LearningObjectivesConditionalsSlide from './slides/LearningObjectivesConditionalsSlide';
import BooleanLogicSlide from './slides/BooleanLogicSlide';
import LogicBlocksSlide from './slides/LogicBlocksSlide';
import SensingIntroSlide from './slides/SensingIntroSlide';
import SensingScenariosSlide from './slides/SensingScenariosSlide';
import IfThenStructureSlide from './slides/IfThenStructureSlide';
import IfThenProjectSlide from './slides/IfThenProjectSlide';
import ConditionalsTroubleshootingSlide from './slides/ConditionalsTroubleshootingSlide';
import ConditionalsReflectionSlide from './slides/ConditionalsReflectionSlide';

export default function Chapter3Module({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Hitung jumlah total slide (indeks terakhir)
  const totalSlides = 10; // Dari 0 hingga 9 = 10 slide
  const maxSlideIndex = totalSlides - 1; // 9

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlideIndex)); // Gunakan maxSlideIndex
  }, [maxSlideIndex]);

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

  // Chapter 3 Slide Configuration
  const slideConfig = [
    { title: 'Making Decisions', render: () => <ConditionalsIntroSlide /> },
    { title: 'Learning Objectives (Conditionals)', render: () => <LearningObjectivesConditionalsSlide /> },
    { title: 'Boolean Logic', render: () => <BooleanLogicSlide /> },
    { title: 'Logic Blocks', render: () => <LogicBlocksSlide /> },
    { title: 'Sensing Inputs', render: () => <SensingIntroSlide /> },
    { title: 'Sensing Scenarios', render: () => <SensingScenariosSlide /> },
    { title: 'If-Then Structure', render: () => <IfThenStructureSlide /> },
    { title: 'Project: Catch the Fruit', render: () => <IfThenProjectSlide /> },
    { title: 'Troubleshooting Logic', render: () => <ConditionalsTroubleshootingSlide /> },
    { title: 'Check Your Understanding (Conditionals)', render: () => <ConditionalsReflectionSlide /> },
    // Catatan: Slide terakhir (indeks 9) adalah Check Your Understanding
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
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-100 via-cyan-50 to-blue-100 overflow-hidden">
      
      <Header
        currentSlide={currentSlide}
        totalSlides={slideConfig.length} // Gunakan panjang array
        progress={progress}
        onPrev={prevSlide}
        onNext={nextSlide}
        onMenuToggle={toggleMenu}
        showMenu={showMenu}
        onBack={onBack}
        chapterTitle="Chapter 3: Conditionals"
      />

      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full pt-20 sm:pt-6 md:pt-20 pb-20 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fadeIn">
              {slideConfig[currentSlide].render()}
            </div>
          </div>
        </div>
      </div>

      <SlideMenuSidebar
        slides={slideConfig}
        currentSlide={currentSlide}
        completedSlides={completedSlides}
        onClose={toggleMenu}
        onSelect={goToSlide}
        isOpen={showMenu}
      />

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