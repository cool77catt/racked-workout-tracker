
export const weightTypes = ['machine', 'barbell', 'dumbell', 'free-weight', 'cable', 'other'] as const;
export const weightUnits = ['lb', 'kg', ''] as const;


export type ExerciseDetails = {
  
  numReps: number;
  weight: number;
  weightType?: typeof weightTypes;
  weightUnits?: typeof weightUnits;
}


export type Exercise = {
  name: string,
  target?: ExerciseDetails,
  results?: ExerciseDetails
};