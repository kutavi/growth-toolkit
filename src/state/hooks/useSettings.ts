import { useDispatch, useSelector } from 'react-redux';
import { updateSettings as updateSettingsAction } from '../actions/actions';
import { Store } from '../reducers/root';
import { SettingsState } from '../reducers/settings';

export const useSettings = () => {
  const dispatch = useDispatch();

  const isNavigationOpen = useSelector(
    (state: Store) => state.settings.isNavigationOpen
  );
  const isMotivatorsInfoOpen = useSelector(
    (state: Store) => state.settings.isMotivatorsInfoOpen
  );
  const isWheelInfoOpen = useSelector(
    (state: Store) => state.settings.isWheelInfoOpen
  );

  const isResilienceInfoOpen = useSelector(
    (state: Store) => state.settings.isResilienceInfoOpen
  );

  const updateSettings = (newSettings: Partial<SettingsState>) => {
    dispatch(updateSettingsAction(newSettings));
  };

  return {
    isNavigationOpen,
    isMotivatorsInfoOpen,
    isResilienceInfoOpen,
    isWheelInfoOpen,
    updateSettings,
  };
};
