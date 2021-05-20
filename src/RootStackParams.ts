import { Workout } from './types';

export type RootStackParamList = {
  Home: undefined,
  ActiveSession: {
    workout: Workout,
  },
};