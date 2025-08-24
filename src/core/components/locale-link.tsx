'use client';

import Link from 'next/link';
import { type ComponentProps, useMemo } from 'react';

import { languages } from '@/app/i18n/settings';

import { useLng } from '../utils/use-lng';

export type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink(props: LocaleLinkProps) {
	const lng = useLng();
	const propsHref = props.href;

	const localeHref = useMemo(() => {
		if (typeof propsHref !== 'string' || !propsHref.startsWith('/')) {
			return propsHref;
		}
		const pathnameFirstSegment = propsHref.split('/')[1];
		if (languages.includes(pathnameFirstSegment)) {
			return propsHref;
		}
		return `/${lng}/${propsHref}`;
	}, [lng, propsHref]);

	return <Link {...props} href={localeHref} />;
}
