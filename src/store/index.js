import { configureStore } from '@reduxjs/toolkit';
import trailsReducer from './slices/trailsSlice';
import citiesReducer from './slices/citiesSlice';

export const store = configureStore({
  reducer: {
    trails: trailsReducer,
    cities: citiesReducer,
  },
});
