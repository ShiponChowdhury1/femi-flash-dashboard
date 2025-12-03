import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/slice';
import usersReducer from '../features/users/slice';
import subscriptionsReducer from '../features/subscriptions/slice';
import revenueReducer from '../features/revenue/slice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    users: usersReducer,
    subscriptions: subscriptionsReducer,
    revenue: revenueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
