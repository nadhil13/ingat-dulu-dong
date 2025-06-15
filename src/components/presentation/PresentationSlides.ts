
import { coverSlides } from './slides/coverSlides';
import { teamSlides } from './slides/teamSlides';
import { conceptSlides } from './slides/conceptSlides';
import { algorithmSlides } from './slides/algorithmSlides';
import { exampleSlides } from './slides/exampleSlides';
import { summarySlides } from './slides/summarySlides';

export const presentationSlides = [
  ...coverSlides.filter(slide => slide.id === 1),
  ...teamSlides,
  ...conceptSlides,
  ...algorithmSlides,
  ...exampleSlides,
  ...summarySlides,
  ...coverSlides.filter(slide => slide.id === 17)
].sort((a, b) => a.id - b.id);
