// import { CircuitTargets, CircuitResults } from '.';

// export class WorkoutMeta {
//   title: string = '';

//   constructor(title: string = '') {
//     this.title=title;
//   }
// }

// export class WorkoutTargets extends WorkoutMeta{
//   circuitList: CircuitTargets[] = []
// }

// export class WorkoutResults extends WorkoutMeta {
//   targets?: WorkoutTargets;
//   circuitResultsList: CircuitResults[] = [];
// };

import { Circuit } from '.';

export type Workout = {
  name: string,
  targetCircuits?: Circuit,
  circuitResults?: Circuit
};