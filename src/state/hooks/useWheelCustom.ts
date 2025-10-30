import { useWheelCustomContext } from '../context/AppContext';

export const useWheelCustom = () => {
  const { state, setState } = useWheelCustomContext();

  const categories = state.categories;

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
    setState({ categories: wheelForState });
  };

  return {
    categories,
    updateCategories,
  };
};
