import Acceptance from '../assets/acceptance.jpeg';
import Curiosity from '../assets/curiosity.jpeg';
import Freedom from '../assets/freedom.jpeg';
import Goal from '../assets/goal.jpeg';
import Honor from '../assets/honor.jpeg';
import Mastery from '../assets/mastery.jpeg';
import Motivators from '../assets/moving-motivators.jpg';
import Order from '../assets/order.jpeg';
import Power from '../assets/power.jpeg';
import Relatedness from '../assets/relatedness.jpeg';
import Status from '../assets/status.jpeg';

export const routes = [
  {
    route: '/moving-motivators',
    label: 'Moving Motivators',
    image: Motivators,
    description:
      'An exercise to help you understand what it is that motivates you and how a change may affect you.',
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
      'Constant coordination, discussions, approvals and need to clarify things can drain you',
      'Waiting for others, sharing parts of your work or not having the whole picture is not your way of working',
      'You need to be autonomous and independent',
    ],
  },
  {
    name: 'Curiosity',
    description: 'I have plenty of things to investigate and to think about.',
    color: '#ff7d00',
    icon: Curiosity,
    examples: [
      'You love problem solving, puzzles and having lots to think about. A work without that is plain boring to you.',
      'You can\'t imagine day to day without encountering something new and having "what\'s that" moments.',
      'You just love learning and getting your hands dirty with different things.',
    ],
  },
  {
    name: 'Power',
    description:
      'There is enough room for me to influence what happens around me.',
    color: '#8c6938',
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
    description: 'The people around me approve of what I do and who I am.',
    color: '#968f00',
    icon: Acceptance,
    examples: [
      'Being able to bring yourself to work is a must for you.',
      "Having to were a mask doesn't sound like a viable option for you, people need to accept you for who you are.",
      'You seak approval for your work and it is important to you that it adds value.',
    ],
  },
  {
    name: 'Honor',
    description:
      'I feel proud that my personal values are reflected in how I work.',
    color: '#2aa7de',
    icon: Honor,
    examples: [
      'Working with people and in an environment that shares the same values and mentality as you is important to you.',
      'Having to act against what you believe can really put you off.',
    ],
  },
  {
    name: 'Goal',
    description: 'My purpose in life is reflected in the work that I do.',
    color: '#6600de',
    icon: Goal,
    examples: [
      'You love a job that matches your personal goals and where you see yourself in the future',
      'The work that you do has to bring you a step closer to your future self',
      'Your inner "WHY" that gets you up every day needs to be satisfied by the work that you do',
    ],
  },
  {
    name: 'Mastery',
    description:
      'My work challenges my competence but it is still within my abilities.',
    examples: [
      'It is important for you to feel that you are good in what you do and are constantly evolving',
      'You like making progress everyday and seeing your knowledge grow. You often ask yourself the question "what did I learn today".',
      'On the other hand, treading in completely unknown waters can really stress you out',
      'Being pulled into a new area can throw you off balance if it does not match your abilities',
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
      "You can't imagine spending a day without having a word with your colleagues",
      'Getting on well with others or having things in common clearly affects your passion for work',
      'Working with people you hardly get to know is not an option',
      'Thinking back on remote working, not seeing or talking to your colleagues like before is something that really affected you.',
    ],
  },
  {
    name: 'Status',
    description:
      'My position is good, and recognized by the people who work with me.',
    color: '#d400ff',
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
    description:
      'There are enough rules and policies for a stable environment.',
    color: '#af00fc',
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

export const texts = {
  motivators: {
    title: 'Moving Motivators',
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
            Are you going through a change (new role, new project, team change,
            etc)? Check which motivators get affected and the impact to your
            most important ones.
          </li>
        </ol>
        You can read more{' '}
        <a
          target='_blank'
          href='https://management30.com/practice/moving-motivators/'>
          here
        </a>
        <br />
        Or watch an example
        <a target='_blank' href='https://www.youtube.com/watch?v=2oh7D_n4YK4'>
          here
        </a>
      </div>
    ),
  },
};
