import Acceptance from '../assets/acceptance.jpeg';
import Curiosity from '../assets/curiosity.jpeg';
import Freedom from '../assets/freedom.jpeg';
import Goal from '../assets/goal.jpeg';
import Honor from '../assets/honor.jpeg';
import Mastery from '../assets/mastery.jpeg';
import Motivators from '../assets/moving-motivators.png';
import Order from '../assets/order.jpeg';
import Power from '../assets/power.jpeg';
import Relatedness from '../assets/relatedness.jpeg';
import Resilience from '../assets/resilience.png';
import Status from '../assets/status.jpeg';
import WheelCustom from '../assets/wheel-custom.png';
import WheelOfLife from '../assets/wheel-of-life.png';
import * as colors from '../styles/_colors.module.scss';

const movingMotivatorsLink = '/moving-motivators/';
export const routes = [
  {
    route: movingMotivatorsLink,
    label: 'Moving Motivators',
    image: Motivators,
    description:
      'An exercise to help you understand what it is that motivates you and how a change may affect you.',
    routes: [
      {
        route: movingMotivatorsLink,
        label: 'Set your order',
        description:
          'Reorder the motivators from most important to least for you',
      },
      {
        route: `${movingMotivatorsLink}health-check/`,
        label: 'Health check',
        description:
          'Think about your current job and answer yes/no whether you believe each motivator exists for you.',
      },
    ],
  },
  {
    route: '/wheel-of-life/',
    label: 'Wheel of Life',
    image: WheelOfLife,
    description:
      'An exercise to help you improve your life focus by identifying the areas in your life that need attention.',
  },
  {
    route: '/wheel-custom/',
    label: 'Your Custom Wheel',
    image: WheelCustom,
    description:
      'An exercise to help you improve your life focus. Similar to the Wheel of Life but totally customizable!',
  },
  {
    route: '/resilience-scale',
    label: 'Brief Resilience Scale',
    image: Resilience,
    description:
      'A questionaire to assess your ability to bounce back or recover from stress',
  },
];

export const motivators = [
  {
    name: 'Freedom',
    id: 1,
    description:
      'I am independent of others with my work and my responsibilities.',
    color: colors.red,
    icon: Freedom,
    examples: [
      'You prefer taking full ownership of your work',
      'Constant coordination, discussions, approvals and need to clarify things can drain you',
      'Waiting for others or distributing parts of your work is not your prefered way of working',
      'You need to be autonomous and independent',
    ],
  },
  {
    name: 'Curiosity',
    id: 2,
    description: 'I have plenty of things to investigate and to think about.',
    color: colors.orange,
    icon: Curiosity,
    examples: [
      'You love problem solving, puzzles and having lots to think about. A work without that is plain boring to you.',
      'You can\'t imagine day to day without encountering something new and having "what\'s that" moments.',
      'You just love learning and getting your hands dirty with different things.',
    ],
  },
  {
    name: 'Power',
    id: 3,
    description:
      'There is enough room for me to influence what happens around me.',
    color: colors.brown,
    icon: Power,
    examples: [
      'For you, being able to participate and influence decisions and results is important.',
      "You can't go on for long if you are constantly told what to do.",
      'You love to see your ideas being adopted and come to life.',
      'Leadership positions and the ability to guide people or outcomes can renew your interest in the tasks at hand.',
      'Running your own business sounds interesting when you think about your power and impact on the decisions and the market.',
    ],
  },
  {
    name: 'Acceptance',
    id: 4,
    description: 'The people around me approve of what I do and who I am.',
    color: colors.gold,
    icon: Acceptance,
    examples: [
      'Being able to bring yourself to work is a must for you.',
      "Having to were a mask doesn't sound like a viable option for you, people need to accept you for who you are.",
      'You seak approval for your work and it is important to you that it adds value.',
    ],
  },
  {
    name: 'Honor',
    id: 5,
    description:
      'I feel proud that my personal values are reflected in how I work.',
    color: colors.cyan,
    icon: Honor,
    examples: [
      'Working with people and in an environment that shares the same values and mentality as you is important to you.',
      'Having to act against what you believe can really put you off.',
    ],
  },
  {
    name: 'Goal',
    id: 6,
    description: 'My purpose in life is reflected in the work that I do.',
    color: colors.blue,
    icon: Goal,
    examples: [
      'You love a job that matches your personal goals and where you see yourself in the future',
      'The work that you do has to bring you a step closer to your future self',
      'Your inner "WHY" that gets you up every day needs to be satisfied by the work that you do',
    ],
  },
  {
    name: 'Mastery',
    id: 7,
    description:
      'My work challenges my competence but it is still within my abilities.',
    examples: [
      'It is important for you to feel that you are good in what you do and are constantly evolving',
      'You like making progress everyday and seeing your knowledge grow. You often ask yourself the question "what did I learn today".',
      'On the other hand, treading in completely unknown waters can really stress you out',
      'Being pulled into a new area can throw you off balance if it does not match your abilities',
    ],
    color: colors.green,
    icon: Mastery,
  },
  {
    name: 'Relatedness',
    id: 8,
    description: 'I have good social contacts with the people in my work.',
    color: colors.darkPink,
    icon: Relatedness,
    examples: [
      "You can't imagine spending a day without having a word with your colleagues",
      'Getting on well with others or having things in common clearly affects your passion for work',
      'Working with people you hardly get to know is not an option',
      'Thinking back on remote working, not seeing or talking to your colleagues like before is something that really affected you.',
    ],
  },
  {
    name: 'Status',
    id: 9,
    description:
      'My position is good, and recognized by the people who work with me.',
    color: colors.pink,
    icon: Status,
    examples: [
      'You prefer working in prestigious workplaces that are recognized in the market.',
      'Hierarchy having a title and enjoying different benefits based on your title is important to you.',
      'You enjoy perks like a company car, getting a better office or moving to a higher floor based on your position.',
      'Thinking about management positions, you find the prestige and title attractive.',
    ],
  },
  {
    name: 'Order',
    id: 10,
    description:
      'There are enough rules and policies for a stable environment.',
    color: colors.purple,
    icon: Order,
    examples: [
      'Having a robust process behind every piece of work is important to you',
      "You can't imagine working in environments where there is no documentation or rules",
      'You prefer not having to organize and figure out things outside your role or seak out clarifications',
      'Seeing others disrupting the process or being chaotic can really fire you up',
      'Freelancing or environments with loose policies can make you stressful',
    ],
  },
];

export const wheelOfLife = [
  { id: 1, name: 'Career' },
  { id: 2, name: 'Finance' },
  { id: 3, name: 'Relationships' },
  { id: 4, name: 'Social' },
  { id: 5, name: 'Health' },
  { id: 6, name: 'Family' },
  { id: 7, name: 'Growth' },
  { id: 8, name: 'Attitude' },
];

export const resilience = [
  {
    id: 1,
    question: 'I tend to bounce back quickly after hard times.',
    points: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    question: 'I have a hard time making it through stressful events.',
    points: [5, 4, 3, 2, 1],
  },
  {
    id: 3,
    question: 'It does not take me long to recover from a stressful event.',
    points: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    question: 'It is hard for me to snap back when something bad happens.',
    points: [5, 4, 3, 2, 1],
  },
  {
    id: 5,
    question: 'I usually come through difficult times with little trouble.',
    points: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    question: 'I tend to take a long time to get over setbacks in my life.',
    points: [5, 4, 3, 2, 1],
  },
];

export const wheelAreas = [
  { value: 1, label: 'Performance' },
  { value: 2, label: 'Hobbies' },
  { value: 3, label: 'Art' },
  { value: 4, label: 'Career' },
  { value: 5, label: 'Community' },
  { value: 6, label: 'Relationships' },
  { value: 7, label: 'Family' },
  { value: 8, label: 'Friends' },
  { value: 9, label: 'Finances' },
  { value: 10, label: 'Social' },
  { value: 11, label: 'Growth' },
  { value: 12, label: 'Self-improvement' },
  { value: 13, label: 'Nature' },
  { value: 14, label: 'Attitude' },
  { value: 15, label: 'Spirituality' },
  { value: 16, label: 'Gratitude' },
  { value: 17, label: 'Health' },
  { value: 18, label: 'Love' },
  { value: 19, label: 'Fun' },
  { value: 20, label: 'Personal development' },
  { value: 21, label: 'Active listening' },
  { value: 22, label: 'Education' },
  { value: 23, label: 'Sports' },
  { value: 24, label: 'Contribution' },
  { value: 25, label: 'Goals' },
  { value: 26, label: 'Mission' },
  { value: 27, label: 'Free time' },
  { value: 28, label: 'Sleep' },
  { value: 29, label: 'Purpose' },
  { value: 30, label: 'Exercise' },
  { value: 31, label: 'Mental health' },
  { value: 32, label: 'Nutrition' },
  { value: 33, label: 'Travel' },
  { value: 34, label: 'Creativity' },
  { value: 35, label: 'Learning' },
].sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));

export const texts = {
  motivators: {
    title: 'Moving Motivators',
    description:
      'An exercise to help you understand what it is that motivates you and how a change may affect you.',
    info: (
      <div>
        This is an exercise to reflect on your motivation and how it is affected
        by change. The cards here help you unveil and discuss 10 intrinsic
        desires, which motivate people most.
        <br />
        <br />
        Try the following:
        <ol>
          <li>
            Reorder the cards and define which motivators are important to you
            from top to bottom.
          </li>
          <li>Think about your current job. How is each motivator doing?</li>
          <li>
            Are you going through a change like a new role, project or team?
            Check the impact to your motivators. Are your important ones going
            up or down?
          </li>
        </ol>
        You can read more{' '}
        <a
          target='_blank'
          href='https://management30.com/practice/moving-motivators/'>
          here
        </a>
        <br />
        <br />
        Or watch an example{' '}
        <a target='_blank' href='https://www.youtube.com/watch?v=2oh7D_n4YK4'>
          here
        </a>
      </div>
    ),
  },
  wheelOfLife: {
    title: 'Wheel Of Life',
    description:
      'An exercise to help you improve your life focus by identifying the areas in your life that need attention.',
    info: (
      <div>
        This is an exercise to help you quickly identify the areas in your life
        to which you want to devote more energy and attention, and helps you
        understand where you might want to cut back and put less effort.
        <br />
        <br />
        Try the following:
        <ol>
          <li>
            First, on a scale of 0 to 10, think about the amount of attention
            you're devoting to each area of your life.
          </li>
          <li>
            Next, consider your ideal level of attention in each area of your
            life. What would that look like?
          </li>
          <li>
            Finally, use the visual representation of your current life and your
            ideal life balance. Where are the gaps? These are the areas of your
            life that need more or less of attention.
          </li>
        </ol>
        You can read more{' '}
        <a
          target='_blank'
          href='https://www.mindtools.com/pages/article/newHTE_93.htm'>
          here
        </a>
      </div>
    ),
  },
  wheelCustom: {
    title: 'Custom Wheel',
    description:
      'An exercise to help you identify the areas in your life that need attention. Similar to the wheel of life but you get to choose the areas you want to focus on.',
    info: (
      <div>
        This is an exercise to help you quickly identify the areas in your life
        to which you want to devote more energy and attention. Similar to the
        wheel of life but you get to choose the areas you want to focus on.
        <br />
        <br />
        Try the following:
        <ol>
          <li>
            First, add the areas in your life you want to focus on. Choose from
            the examples or add your own.
          </li>
          <li>
            Then, on a scale of 0 to 10, think about the amount of attention
            you're devoting to each area of your life.
          </li>
          <li>
            Next, consider your ideal level of attention in each area of your
            life. What would that look like?
          </li>
          <li>
            Finally, use the visual representation of your current life and your
            ideal life balance. Where are the gaps? These are the areas of your
            life that need more or less of attention.
          </li>
        </ol>
        You can see the tranditional wheel of life and read more{' '}
        <a
          target='_blank'
          href='https://www.mindtools.com/pages/article/newHTE_93.htm'>
          here
        </a>
      </div>
    ),
  },
  resilience: {
    title: 'Brief Resilience Scale',
    description:
      'A questionaire to assess your ability to bounce back or recover from stress',
    info: (
      <div>
        This is a questionaire to help you assess your ability to bounce back or
        recover from stress.
        <br />
        <br />
        Try the following:
        <ol>
          <li>
            First, answer the statements based on how strongly you agree or
            disagree with them.
          </li>
          <li>
            Then, check your resilience based on the answers. The score ranges
            from 1 (low resilience) to 5 (high resilience).
          </li>
          <li>
            Come back and repeat this exercise as you work on your resilience to
            see your score improve.
          </li>
        </ol>
        You can read more{' '}
        <a
          target='_blank'
          href='https://www.researchgate.net/publication/23164897_The_Brief_Resilience_Scale_Assessing_the_Ability_to_Bounce_Back'>
          here
        </a>
      </div>
    ),
  },
};
