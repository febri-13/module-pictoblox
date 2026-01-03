// src/components/utils/useSlideNavigation.js
import { useState, useEffect } from 'react';

export const useSlideNavigation = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [showMenu, setShowMenu] = useState(false);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const markComplete = () => {
    setCompletedSlides(prev => new Set([...prev, currentSlide]));
  };

  // Keyboard handling
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
      else if (e.key === 'Escape') setShowMenu(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, showMenu, totalSlides]);

  const progress = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return {
    currentSlide,
    completedSlides,
    showMenu,
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    markComplete,
    setShowMenu,
  };
};