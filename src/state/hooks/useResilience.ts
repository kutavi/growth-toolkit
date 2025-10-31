import { resilience } from '../../utils/configs';
import { useResilienceContext, Question } from '../context/AppContext';

export const useResilience = () => {
  const { state, setState } = useResilienceContext();

  const questions = resilience.map(question => {
    const questionInState = state.questions.find(q => q.id === question.id);
    return {
      ...(questionInState ? questionInState : { answer: 0 }),
      ...question,
    };
  });

  const updateResilience = (
    newResilience: (Record<string, unknown> & Question)[]
  ) => {
    const resilienceForState = newResilience.map(w => ({
      id: w.id,
      answer: w.answer,
    }));
    setState({ questions: resilienceForState });
  };

  return {
    questions,
    updateResilience,
  };
};
