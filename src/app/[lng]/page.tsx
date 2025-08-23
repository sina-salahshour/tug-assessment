'use client';

import { useT } from '@/app/i18n/client';

export default function LandingPage() {
	const { t } = useT('dashboard');
	return <div>{t('greeting', { name: 'Sina' })}</div>;
}
