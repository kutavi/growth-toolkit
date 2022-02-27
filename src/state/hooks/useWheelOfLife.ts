import { useDispatch, useSelector } from 'react-redux';
import { wheelOfLife } from '../../utils/configs';
import { updateWheel as updateWheelAction } from '../actions/actions';
import { Store } from '../reducers/root';
import { Category } from '../types/wheel';

export const useWheelOfLife = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state: Store) =>
    wheelOfLife.map(cateogry => {
      const categoryInState = state.wheelOfLife.categories.find(
        cat => cat.id === cateogry.id
      );
      return {
        ...(categoryInState ? categoryInState : { ideal: 0, current: 0 }),
        ...cateogry,
      };
    })
  );

  const updateCategories = (newWheelOfLife: Category[]) => {
    const wheelForState = newWheelOfLife.map(w => ({
      id: w.id,
      ideal: w.ideal,
      current: w.current,
    }));
    dispatch(updateWheelAction({ categories: wheelForState }));
  };

  return {
    categories,
    updateCategories,
  };
};
