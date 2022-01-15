import Acceptance from '../assets/acceptance.jpeg';
import Curiosity from '../assets/curiosity.jpeg';
import Freedom from '../assets/freedom.jpeg';
import Goal from '../assets/goal.jpeg';
import Honor from '../assets/honor.jpeg';
import Mastery from '../assets/mastery.jpeg';
import Order from '../assets/order.jpeg';
import Power from '../assets/power.jpeg';
import Relatedness from '../assets/relatedness.jpeg';
import Status from '../assets/status.jpeg';

export const routes = [
  {
    route: '/moving-motivator',
    label: 'Moving Motivators',
    routes: [
      { route: '/manual', label: 'DIY' },
      { route: '/mentor', label: 'Mentor' },
    ],
  },
];

export const motivators = [
  {
    name: 'Freedom',
    description:
      'I am independent of others with my work and my responsibilities.',
    color: '#ff0000',
    icon: Freedom,
    examples: [
      'You prefer working alone and taking full ownership of your work',
      'Constant coordination, discussions and need to clarify things can drain you',
      'Waiting for others, sharing parts of your work or not having the whole picture are not your thing',
    ],
  },
  {
    name: 'Curiosity',
    description: 'I have plenty of things to investigate and to think about.',
    color: '#ff7d00',
    icon: Curiosity,
  },
  {
    name: 'Power',
    description:
      'There is enough room for me to influence what happens around me.',
    color: '#8c6938',
    icon: Power,
  },
  {
    name: 'Acceptance',
    description: 'The people around me approve of what I do and who I am.',
    color: '#968f00',
    icon: Acceptance,
  },
  {
    name: 'Honor',
    description:
      'I feel proud that my personal values are reflected in how I work.',
    color: '#2aa7de',
    icon: Honor,
  },
  {
    name: 'Goal',
    description: 'My purpose in life is reflected in the work that I do.',
    color: '#6600de',
    icon: Goal,
  },
  {
    name: 'Mastery',
    description:
      'My work challenges my competence but it is still within my abilities.',
    examples: [
      'Treading in unknown waters all the time can really stress you out',
      'It is important for you to feel that you are good in what you do and are constantly evolving',
      'You prefer a clear, visible progress and learning curve',
      'Being thrown in a new area does not work good for you',
    ],
    color: '#33b09d',
    icon: Mastery,
  },
  {
    name: 'Relatedness',
    description: 'I have good social contacts with the people in my work.',
    color: '#00a045',
    icon: Relatedness,
    examples: [
      'You cant imagine spending a day without chatting with your colleagues',
      'Getting on well with others or have things in common clearly affects your passion for work',
      'Working with people you hardly get to know is not an option',
    ],
  },
  {
    name: 'Status',
    description:
      'My position is good, and recognized by the people who work with me.',
    color: '#d400ff',
    icon: Status,
    examples: [
      'You prefer working in prestigious workplaces that are recognised in the market',
      'Hierarchy and enjoying different benefits based on your title is important to you',
    ],
  },
  {
    name: 'Order',
    description:
      'There are enough rules and policies for a stable environment.',
    color: '#af00fc',
    icon: Order,
    examples: [
      'Having a robust process behind every piece of work is important to you',
      'You cant imagine working in environments where there is no documentation or rules',
      'You prefer not having to organise and figure out things outside your role or seak out clarifications',
      'Seeing others disrupting the process or being chaotic can really fire you up',
    ],
  },
];
