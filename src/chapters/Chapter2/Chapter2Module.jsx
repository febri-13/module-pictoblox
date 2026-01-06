// src/chapters/Chapter2/Chapter2Module.jsx
import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/layout/Header';
import SlideMenuSidebar from '../../components/layout/SlideMenuSidebar';

// --- Import semua slide untuk Bab 2 ---
import LoopsIntroSlide from './slides/LoopsIntroSlide';
import LearningObjectivesLoopsSlide from './slides/LearningObjectivesLoopsSlide';
import WhatIsALoopSlide from './slides/WhatIsALoopSlide';
import The3KingsOfLoopsSlide from './slides/The3KingsOfLoopsSlide';
import AnimationAndCostumesSlide from './slides/AnimationAndCostumesSlide';
import CoordinateSystemSlide from './slides/CoordinateSystemSlide';
import LoopsPracticeSlide from './slides/LoopsPracticeSlide';
import LoopsReflectionSlide from './slides/LoopsReflectionSlide';

export default function Chapter2Module({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  // Hitung jumlah total slide (indeks terakhir)
  const totalSlides = 8; // Dari 0 hingga 8 = 9 slide
  const maxSlideIndex = totalSlides - 1; // 8

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

  // Chapter 2 Slide Configuration
  const slideConfig = [
    { title: 'The Power of Repetition', render: () => <LoopsIntroSlide /> },
    { title: 'Learning Objectives (Loops)', render: () => <LearningObjectivesLoopsSlide /> },
    { title: 'What is a Loop?', render: () => <WhatIsALoopSlide /> },
    { title: 'The 3 Kings of Loops', render: () => <The3KingsOfLoopsSlide /> },
    { title: 'Animation & Costumes', render: () => <AnimationAndCostumesSlide /> },
    { title: 'Coordinate System', render: () => <CoordinateSystemSlide /> },
    { title: 'Practice: Walking & Talking', render: () => <LoopsPracticeSlide /> },
    { title: 'Check Your Understanding (Loops)', render: () => <LoopsReflectionSlide /> },
    // Catatan: Slide terakhir (indeks 8) adalah Check Your Understanding
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
        chapterTitle="Chapter 2: Loops"
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