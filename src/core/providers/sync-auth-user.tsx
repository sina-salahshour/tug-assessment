'use client';

import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '@/features/auth/firebase';

import { userActions } from '../store/slices/user-slice';

export default function SyncAuthUser() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
			if (user) dispatch(userActions.setUser(JSON.parse(JSON.stringify(user))));
			else dispatch(userActions.clearUser());
		});

		return () => unsubscribe();
	}, [dispatch]);
	return null;
}
