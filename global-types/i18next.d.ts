import 'i18next';

import type nsAuth from '@/app/i18n/locales/en/auth.json';
import type nsDashboard from '@/app/i18n/locales/en/dashboard.json';
import type nsDefault from '@/app/i18n/locales/en/translation.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translation';
		resources: {
			dashboard: typeof nsDashboard;
			translation: typeof nsDefault;
			auth: typeof nsAuth;
		};
	}
}
