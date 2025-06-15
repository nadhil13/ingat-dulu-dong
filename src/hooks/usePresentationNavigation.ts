
import { useState, useEffect } from 'react';
import { presentationSlides } from '@/components/presentation/PresentationSlides';

export const usePresentationNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0);

  // Debug log untuk memastikan slides termuat dengan benar
  console.log('Total slides loaded:', presentationSlides.length);
  console.log('Current slide index:', currentSlide);
  console.log('Current slide data:', presentationSlides[currentSlide]);

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
    setCurrentSlide((prev) => {
      const newIndex = (prev + 1) % presentationSlides.length;
      console.log('Moving to next slide:', newIndex, presentationSlides[newIndex]);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => {
      const newIndex = (prev - 1 + presentationSlides.length) % presentationSlides.length;
      console.log('Moving to prev slide:', newIndex, presentationSlides[newIndex]);
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    console.log('Going to slide:', index, presentationSlides[index]);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const getCurrentSlide = () => {
    const slide = presentationSlides[currentSlide];
    console.log('Getting current slide:', slide);
    return slide;
  };

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
