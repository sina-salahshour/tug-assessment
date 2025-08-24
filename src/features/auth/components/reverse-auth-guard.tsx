'use client';
import { useEffect } from 'react';

import { selectUser } from '@/core/store/slices/user-slice';
import { useAppSelector } from '@/core/store/store';
import { useLocaleRouter } from '@/core/utils/use-locale-router';

export function ReverseAuthGuard() {
	const user = useAppSelector(selectUser);
	const router = useLocaleRouter();

	useEffect(() => {
		if (user) {
			router.replace('/');
		}
	}, [router, user]);
	return null;
}
