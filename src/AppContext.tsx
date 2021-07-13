import React from 'react';
import { Workout } from './types';

type AppContextType = {
  theme?: any,
  workout?: Workout, // Change this type later
}

const AppContext = React.createContext<AppContextType>({});

export default AppContext;