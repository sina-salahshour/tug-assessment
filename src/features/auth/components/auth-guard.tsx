'use client';
import { type PropsWithChildren, useEffect } from 'react';

import { selectUser } from '@/core/store/slices/user-slice';
import { useAppSelector } from '@/core/store/store';
import { useLocaleRouter } from '@/core/utils/use-locale-router';

export function AuthGuard(props: PropsWithChildren) {
	const user = useAppSelector(selectUser);
	const router = useLocaleRouter();
	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (user == null) {
			timeout = setTimeout(() => {
				router.replace('/auth/login');
			}, 750);
		}

		return () => clearTimeout(timeout);
	}, [router, user]);

	if (user == null) {
		return null;
	}
	return props.children;
}
