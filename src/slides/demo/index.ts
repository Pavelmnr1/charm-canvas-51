import Slide01Opening from './Slide01Opening';
import Slide02WhoAmI from './Slide02WhoAmI';
import Slide03Start from './Slide03Start';
import Slide04Switch from './Slide04Switch';
import Slide05Hackathon from './Slide05Hackathon';
import Slide06Limits from './Slide06Limits';
import Slide07Learned from './Slide07Learned';
import Slide08Next from './Slide08Next';
import Slide09Demo from './Slide09Demo';
import Slide10Thanks from './Slide10Thanks';

export const demoSlides = [
  { component: Slide01Opening, name: 'Opening', template: 'title' },
  { component: Slide02WhoAmI, name: 'Who am I', template: 'title' },
  { component: Slide03Start, name: 'Where it started', template: 'quote' },
  { component: Slide04Switch, name: 'The switch', template: 'comparison' },
  { component: Slide05Hackathon, name: 'Hackathon moment', template: 'data-story' },
  { component: Slide09Demo, name: 'See it live', template: 'quote' },
  { component: Slide06Limits, name: "What AI can't do", template: 'quote' },
  { component: Slide07Learned, name: 'What I learned', template: 'title' },
  { component: Slide08Next, name: "What's next", template: 'three-up' },
  { component: Slide10Thanks, name: 'Thanks', template: 'two-column' },
];
