import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState, User } from '@/src/types/user';
import { PlanType, StatusType } from '@/src/types/common';
import { mockUsers } from '@/src/data/users';

const initialState: UsersState = {
  list: mockUsers,
  loading: false,
  filters: {
    search: '',
    plan: 'All',
    status: 'All',
  },
  pagination: {
    page: 1,
    pageSize: 10,
    total: mockUsers.length,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.list = action.payload;
      state.pagination.total = action.payload.length;
    },
    addUser(state, action: PayloadAction<User>) {
      state.list.unshift(action.payload);
      state.pagination.total += 1;
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.list.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter((user) => user.id !== action.payload);
      state.pagination.total -= 1;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setSearchFilter(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
      state.pagination.page = 1;
    },
    setPlanFilter(state, action: PayloadAction<PlanType | 'All'>) {
      state.filters.plan = action.payload;
      state.pagination.page = 1;
    },
    setStatusFilter(state, action: PayloadAction<StatusType | 'All'>) {
      state.filters.status = action.payload;
      state.pagination.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.pagination.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pagination.pageSize = action.payload;
      state.pagination.page = 1;
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setLoading,
  setError,
  setSearchFilter,
  setPlanFilter,
  setStatusFilter,
  setPage,
  setPageSize,
} = usersSlice.actions;

export default usersSlice.reducer;
