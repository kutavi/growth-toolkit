import {
  FaBars,
  FaBug,
  FaCheckCircle,
  FaChevronDown,
  FaDownload,
  FaExclamation,
  FaLightbulb,
  FaQuestion,
  FaRegCopy,
  FaShareAlt,
  FaTimes,
} from 'react-icons/fa';

const Icons = {
  menu: FaBars,
  help: FaLightbulb,
  close: FaTimes,
  arrowDown: FaChevronDown,
  exclamation: FaExclamation,
  question: FaQuestion,
  bug: FaBug,
  check: FaCheckCircle,
  share: FaShareAlt,
  download: FaDownload,
  copy: FaRegCopy,
};

export type IconType = keyof typeof Icons;

interface IconProps {
  size?: number;
  color?: string;
  icon: IconType;
}

const defaultIconSize = 22;
export const Icon = ({ color, size = defaultIconSize, icon }: IconProps) => {
  const component = { icon: Icons[icon] };
  return <component.icon size={size} color={color} />;
};
