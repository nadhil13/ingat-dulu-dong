
import { useState, useEffect } from 'react';
import { presentationSlides } from '@/components/presentation/PresentationSlides';

export const usePresentationNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % presentationSlides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % presentationSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + presentationSlides.length) % presentationSlides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const getCurrentSlide = () => presentationSlides[currentSlide];

  return {
    currentSlide,
    isAutoPlay,
    direction,
    slides: presentationSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay,
    getCurrentSlide
  };
};
