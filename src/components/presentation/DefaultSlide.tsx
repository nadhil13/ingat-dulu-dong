
import SlideTitle from './default/SlideTitle';
import SlideContent from './default/SlideContent';
import SlideDetails from './default/SlideDetails';
import BackgroundDecorations from './default/BackgroundDecorations';

interface DefaultSlideProps {
  title: string;
  content: string;
  details?: string[];
}

const DefaultSlide = ({ title, content, details }: DefaultSlideProps) => {
  return (
    <div className="space-y-8 min-h-[450px] relative">
      <BackgroundDecorations />

      <SlideTitle title={title} />
      
      <SlideContent content={content} />

      {details && <SlideDetails details={details} />}
    </div>
  );
};

export default DefaultSlide;
