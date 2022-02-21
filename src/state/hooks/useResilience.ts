import { useDispatch, useSelector } from 'react-redux';
import { resilience } from '../../utils/configs';
import { updateResilience as updateResilienceAction } from '../actions/actions';
import { Question } from '../reducers/resilience';
import { Store } from '../reducers/root';

export const useResilience = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state: Store) =>
    resilience.map(question => {
      const questionInState = state.resilience.questions.find(
        q => q.id === question.id
      );
      return {
        ...(questionInState ? questionInState : { answer: 0 }),
        ...question,
      };
    })
  );

  const updateResilience = (
    newResilience: ({ [key: string]: any } & Question)[]
  ) => {
    const resilienceForState = newResilience.map(w => ({
      id: w.id,
      answer: w.answer,
    }));
    dispatch(updateResilienceAction({ questions: resilienceForState }));
  };

  return {
    questions,
    updateResilience,
  };
};
