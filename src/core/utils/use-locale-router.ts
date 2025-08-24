import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { languages } from '@/app/i18n/settings';

import { useLng } from './use-lng';

function convertToLocalePath(lng: string, path: string) {
	if (!path.startsWith('/')) {
		return path;
	}
	const pathnameFirstSegment = path.split('/')[1];
	if (languages.includes(pathnameFirstSegment)) {
		return path;
	}
	return `/${lng}/${path}`;
}

export function useLocaleRouter() {
	const router = useRouter();
	const lng = useLng();

	return useMemo(() => {
		return {
			...router,
			replace: (url: string, ...rest) =>
				router.replace(convertToLocalePath(lng, url), ...rest),
			push: (url: string, ...rest) =>
				router.push(convertToLocalePath(lng, url), ...rest),
		} satisfies typeof router;
	}, [lng, router]);
}
