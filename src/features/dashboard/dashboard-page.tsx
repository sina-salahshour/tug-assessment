'use client';

import { useT } from '@/app/i18n/client';
import { selectUser } from '@/core/store/slices/user-slice';
import { useAppSelector } from '@/core/store/store';

import { DriverSection } from './components/driver-section';
import { DueDatesSection } from './components/due-dates-section';
import { RecentSubmissionsSection } from './components/recent-submissions-section';
import { VehicleSection } from './components/vehicle-section';
import {
	DashboardContainer,
	DashboardGreetingWrapper,
	DashboardRow,
} from './dashboard.styles';

export function DashboardPage() {
	const { t } = useT('dashboard');
	const user = useAppSelector(selectUser);
	return (
		<DashboardContainer as='main'>
			<DashboardGreetingWrapper>
				{t('greeting', { name: user?.displayName })}
			</DashboardGreetingWrapper>
			<DashboardRow>
				<DriverSection />
				<VehicleSection />
			</DashboardRow>
			<DueDatesSection />
			<RecentSubmissionsSection />
		</DashboardContainer>
	);
}
