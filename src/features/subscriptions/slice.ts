import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubscriptionsState, Subscription } from '@/src/types/subscription';

const initialState: SubscriptionsState = {
  list: [],
  loading: false,
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    setSubscriptions(state, action: PayloadAction<Subscription[]>) {
      state.list = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setSubscriptions, setLoading, setError } = subscriptionsSlice.actions;
export default subscriptionsSlice.reducer;
