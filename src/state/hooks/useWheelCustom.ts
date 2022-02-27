import { useDispatch, useSelector } from 'react-redux';
import { updateCustomWheel as updateWheelAction } from '../actions/actions';
import { Store } from '../reducers/root';
export const useWheelCustom = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: Store) => state.wheelCustom.categories
  );

  const updateCategories = (
    newWheel: {
      name: string;
      id: number | string;
      current?: number;
      ideal?: number;
    }[]
  ) => {
    const wheelForState = newWheel.map(w => {
      const category = categories.find(c => c.id === w.id) || {
        ideal: 0,
        current: 0,
      };
      return {
        ...category,
        ...w,
      };
    });
    dispatch(updateWheelAction({ categories: wheelForState }));
  };

  return {
    categories,
    updateCategories,
  };
};
