import { availableSpaceBreakpoint } from '../../utils/const';
import { windowLoaded } from '../../utils/helpers';
import { useSettingsContext, SettingsState } from '../context/AppContext';

const calculateValue = (value: boolean | undefined) => {
  const hasAvailableSpace =
    windowLoaded() && window.innerWidth >= availableSpaceBreakpoint;
  return value === undefined ? hasAvailableSpace : value;
};

export const useSettings = () => {
  const { state, setState } = useSettingsContext();

  const isNavigationOpen = calculateValue(state.isNavigationOpen);
  const isMotivatorsInfoOpen = calculateValue(state.isMotivatorsInfoOpen);
  const isWheelInfoOpen = calculateValue(state.isWheelInfoOpen);
  const isResilienceInfoOpen = calculateValue(state.isResilienceInfoOpen);
  const newsletterPromptTriggered = state.newsletterPromptTriggered;

  const updateSettings = (newSettings: Partial<SettingsState>) => {
    setState(newSettings);
  };

  return {
    isNavigationOpen,
    isMotivatorsInfoOpen,
    isResilienceInfoOpen,
    isWheelInfoOpen,
    newsletterPromptTriggered,
    updateSettings,
  };
};
