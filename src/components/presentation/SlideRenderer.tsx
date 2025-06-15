
import CoverSlide from './CoverSlide';
import TeamSlide from './TeamSlide';
import DefaultSlide from './DefaultSlide';
import MatrixSlide from './MatrixSlide';

interface SlideRendererProps {
  slide: any;
}

const SlideRenderer = ({ slide }: SlideRendererProps) => {
  switch (slide.type) {
    case 'cover':
      return (
        <CoverSlide 
          title={slide.title}
          subtitle={slide.subtitle}
          content={slide.content}
        />
      );

    case 'team':
      return (
        <TeamSlide 
          title={slide.title}
          members={slide.content}
        />
      );

    default:
      // Check if slide has matrix example
      if (slide.matrixExample) {
        return (
          <MatrixSlide 
            title={slide.title}
            content={slide.content}
            details={slide.details}
            matrixExample={slide.matrixExample}
          />
        );
      }
      
      return (
        <DefaultSlide 
          title={slide.title}
          content={slide.content}
          details={slide.details}
        />
      );
  }
};

export default SlideRenderer;
