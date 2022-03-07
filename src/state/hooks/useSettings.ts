import { useDispatch, useSelector } from 'react-redux';
import { availableSpaceBreakpoint } from '../../utils/const';
import { windowLoaded } from '../../utils/helpers';
import { updateSettings as updateSettingsAction } from '../actions/actions';
import { Store } from '../reducers/root';
import { SettingsState } from '../reducers/settings';

const calculateValue = (value: boolean | undefined) => {
  const hasAvailableSpace =
    windowLoaded() && window.innerWidth >= availableSpaceBreakpoint;
  return value === undefined ? hasAvailableSpace : value;
};
export const useSettings = () => {
  const dispatch = useDispatch();

  const isNavigationOpen = useSelector((state: Store) =>
    calculateValue(state.settings.isNavigationOpen)
  );
  const isMotivatorsInfoOpen = useSelector((state: Store) =>
    calculateValue(state.settings.isMotivatorsInfoOpen)
  );
  const isWheelInfoOpen = useSelector((state: Store) =>
    calculateValue(state.settings.isWheelInfoOpen)
  );

  const isResilienceInfoOpen = useSelector((state: Store) =>
    calculateValue(state.settings.isResilienceInfoOpen)
  );

  const newsletterPromptTriggered = useSelector(
    (state: Store) => state.settings.newsletterPromptTriggered
  );

  const updateSettings = (newSettings: Partial<SettingsState>) => {
    dispatch(updateSettingsAction(newSettings));
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
