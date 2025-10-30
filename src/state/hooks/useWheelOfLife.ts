import { wheelOfLife } from '../../utils/configs';
import { useWheelOfLifeContext } from '../context/AppContext';
import { Category } from '../types/wheel';

export const useWheelOfLife = () => {
  const { state, setState } = useWheelOfLifeContext();

  const categories = wheelOfLife.map(cateogry => {
    const categoryInState = state.categories.find(
      cat => cat.id === cateogry.id
    );
    return {
      ...(categoryInState ? categoryInState : { ideal: 0, current: 0 }),
      ...cateogry,
    };
  });

  const updateCategories = (newWheelOfLife: Category[]) => {
    const wheelForState = newWheelOfLife.map(w => ({
      id: w.id,
      ideal: w.ideal,
      current: w.current,
    }));
    setState({ categories: wheelForState });
  };

  return {
    categories,
    updateCategories,
  };
};
