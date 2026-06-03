import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchCities } from '../../services/cities.service';

export const fetchCities = createAsyncThunk('cities/search', (query) =>
  searchCities(query)
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    items: [],
    selectedCity: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCity(state, action) {
      state.selectedCity = action.payload;
    },
    clearCities(state) {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectCity, clearCities } = citiesSlice.actions;
export default citiesSlice.reducer;
