
import CoverSlide from './CoverSlide';
import TeamSlide from './TeamSlide';
import DefaultSlide from './DefaultSlide';

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
