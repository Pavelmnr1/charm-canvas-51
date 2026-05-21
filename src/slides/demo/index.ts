import Slide01Title from './Slide01Title';
import Slide02WhoAmI from './Slide02WhoAmI';
import Slide03Journey from './Slide03Journey';
import Slide04Building from './Slide04Building';
import Slide05Limits from './Slide05Limits';
import Slide06Demo from './Slide06Demo';
import Slide07Thanks from './Slide07Thanks';

export const demoSlides = [
  { component: Slide01Title, name: 'Title', template: 'title' },
  { component: Slide02WhoAmI, name: 'Who am I', template: 'two-column' },
  { component: Slide03Journey, name: 'AI Journey', template: 'comparison' },
  { component: Slide04Building, name: 'Building with AI', template: 'data-story' },
  { component: Slide05Limits, name: "What AI Can't Do", template: 'comparison' },
  { component: Slide06Demo, name: 'Live Demo', template: 'quote' },
  { component: Slide07Thanks, name: 'Thank You', template: 'two-column' },
];
