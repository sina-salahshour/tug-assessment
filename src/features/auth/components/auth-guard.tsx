'use client';
import { type PropsWithChildren, useEffect } from 'react';

import { selectUser, selectUserLoading } from '@/core/store/slices/user-slice';
import { useAppSelector } from '@/core/store/store';
import { useLocaleRouter } from '@/core/utils/use-locale-router';

export function AuthGuard(props: PropsWithChildren) {
	const isUserLoading = useAppSelector(selectUserLoading);
	const user = useAppSelector(selectUser);
	const router = useLocaleRouter();
	useEffect(() => {
		if (isUserLoading) {
			return;
		}
		if (user == null) {
			router.replace('/auth/login');
		}
	}, [isUserLoading, router, user]);

	// can show loading fallback state when loading
	if (user == null) {
		return null;
	}
	return props.children;
}
