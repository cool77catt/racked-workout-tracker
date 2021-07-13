import { WorkoutResults } from './types';

export type RootStackParamList = {
  Home: undefined,
  ActiveSession: {
    workout: WorkoutResults,
  },
};