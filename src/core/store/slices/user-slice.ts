import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User } from 'firebase/auth';

import type { RootState } from '../store';

interface UserState {
	user: User | null;
	idToken: string | null;
}

const initialState: UserState = {
	user: null,
	idToken: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
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
export const selectIdToken = (state: RootState) => state.user.user;
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
