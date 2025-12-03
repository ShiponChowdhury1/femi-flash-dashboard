import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RevenueState, RevenueData } from '@/src/types/revenue';

const initialState: RevenueState = {
  data: [],
  stats: {
    total: 0,
    growth: 0,
    currency: 'USD',
  },
  loading: false,
};

const revenueSlice = createSlice({
  name: 'revenue',
  initialState,
  reducers: {
    setRevenueData(state, action: PayloadAction<RevenueData[]>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setRevenueData, setLoading, setError } = revenueSlice.actions;
export default revenueSlice.reducer;
