import { useParams } from 'next/navigation';

import { fallbackLng } from '@/app/i18n/settings';

export function useLng() {
	const params = useParams();
	const lng = Array.isArray(params?.lng)
		? params?.lng[0]
		: (params.lng ?? fallbackLng);
	return lng;
}
