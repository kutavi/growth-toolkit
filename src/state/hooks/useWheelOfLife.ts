import { useDispatch, useSelector } from 'react-redux';
import { updateWheel as updateWheelAction } from '../actions/actions';
import { Store } from '../reducers/root';
import { WheelOfLifeState } from '../reducers/wheelOfLife';

export const useWheelOfLife = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: Store) => state.wheelOfLife.categories
  );

  const updateWheel = (newWheelOfLife: Partial<WheelOfLifeState>) => {
    dispatch(updateWheelAction(newWheelOfLife));
  };

  return {
    categories,
    updateWheel,
  };
};
