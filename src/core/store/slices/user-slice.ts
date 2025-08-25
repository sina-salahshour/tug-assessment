import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User } from 'firebase/auth';

import type { RootState } from '../store';

interface UserState {
	user: User | null;
	idToken: string | null;
	loading: boolean;
}

const initialState: UserState = {
	user: null,
	idToken: null,
	loading: true,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
			state.loading = false;
		},
		clearUser: (state) => {
			state.user = null;
			state.loading = false;
		},
		setIdToken: (state, action: PayloadAction<string | null>) => {
			state.idToken = action.payload;
		},
		clearIdToken: (state) => {
			state.idToken = null;
		},
	},
});

export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectIdToken = (state: RootState) => state.user.user;
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
