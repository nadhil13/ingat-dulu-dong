
import NavigationHeader from './NavigationHeader';
import NavigationFooter from './NavigationFooter';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  isAutoPlay: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
  onToggleAutoPlay: () => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  isAutoPlay,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
  onToggleAutoPlay
}: SlideNavigationProps) => {
  return (
    <>
      <NavigationHeader
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={onToggleAutoPlay}
      />

      <NavigationFooter
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevSlide={onPrevSlide}
        onNextSlide={onNextSlide}
        onGoToSlide={onGoToSlide}
      />
    </>
  );
};

export default SlideNavigation;
