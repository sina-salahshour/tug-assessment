'use client';

import { useT } from '@/app/i18n/client';

import { DriverSection } from './components/driver-section';
import { VehicleSection } from './components/vehicle-section';
import { DashboardGreetingWrapper } from './dashboard.styles';

export function DashboardPage() {
	const { t } = useT('dashboard');
	return (
		<main>
			<DashboardGreetingWrapper>
				{t('greeting', { name: 'Firdaus Razak' })}
			</DashboardGreetingWrapper>
			<DriverSection />
			<VehicleSection />
		</main>
	);
}
