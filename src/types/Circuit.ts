// import { SequenceTargets, SequenceResults } from '.';


// export class CircuitTargets {
//   sequence?: SequenceTargets;   // The list of exercises in the sequence
//   numSets: number = 0;
// }

// export class CircuitResults {
//   targets?: CircuitTargets;
//   results: SequenceResults[] = [];  // Every sequence/set results
//   numSets: number = 0;
// }
import { Exercise } from '.';

export type Circuit = {
  targetSequence: Exercise[],
  sequenceResults: Sequence,
};
