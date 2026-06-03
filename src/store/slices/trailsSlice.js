import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTrailsByCity } from '../../services/trails.service';

export const fetchTrails = createAsyncThunk('trails/fetchByCity', (cityId) =>
  getTrailsByCity(cityId)
);

const trailsSlice = createSlice({
  name: 'trails',
  initialState: {
    items: [],
    selectedTrail: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectTrail(state, action) {
      state.selectedTrail = action.payload;
    },
    clearTrails(state) {
      state.items = [];
      state.selectedTrail = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTrails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTrails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectTrail, clearTrails } = trailsSlice.actions;
export default trailsSlice.reducer;
