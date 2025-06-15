
import SlideNavigation from '@/components/presentation/SlideNavigation';
import BackgroundAnimation from '@/components/presentation/BackgroundAnimation';
import SlideTransition from '@/components/presentation/SlideTransition';
import { usePresentationNavigation } from '@/hooks/usePresentationNavigation';

const Presentation = () => {
  const {
    currentSlide,
    isAutoPlay,
    direction,
    slides,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay,
    getCurrentSlide
  } = usePresentationNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <BackgroundAnimation />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isAutoPlay={isAutoPlay}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
        onToggleAutoPlay={toggleAutoPlay}
      />

      {/* Main Slide Content with Ultra-Smooth Morph Transitions */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6 min-h-[calc(100vh-200px)]">
        <SlideTransition
          currentSlide={currentSlide}
          slide={getCurrentSlide()}
          direction={direction}
        />
      </div>
    </div>
  );
};

export default Presentation;
