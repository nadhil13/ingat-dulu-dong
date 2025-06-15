
import SlideTitle from './default/SlideTitle';
import SlideContent from './default/SlideContent';
import SlideDetails from './default/SlideDetails';
import MatrixDisplay from './matrix/MatrixDisplay';
import BackgroundDecorations from './default/BackgroundDecorations';

interface MatrixSlideProps {
  title: string;
  content: string;
  details?: string[];
  matrixExample: {
    description: string;
    matrices: Record<string, string>;
  };
}

const MatrixSlide = ({ title, content, details, matrixExample }: MatrixSlideProps) => {
  return (
    <div className="space-y-6 min-h-[450px] relative">
      <BackgroundDecorations />

      <SlideTitle title={title} />
      
      <SlideContent content={content} />

      {details && <SlideDetails details={details} />}

      <MatrixDisplay matrixExample={matrixExample} />
    </div>
  );
};

export default MatrixSlide;
