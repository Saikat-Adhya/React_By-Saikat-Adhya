import { configureStore } from '@reduxjs/toolkit';
import  counterReducer  from '../features/counter/counterSlice.jsx';
export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
  },
});
