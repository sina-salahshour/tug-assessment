import { useMemo } from 'react';

import { useDueDatesStatisticsQuery } from '../api';
import {
	DashboardRow,
	DueDatesChartSkeleton,
	DueDatesRemindersSkeleton,
} from '../dashboard.styles';
import { DueDatesCard } from './due-dates-card/due-dates-card';
import { DueDatesReminder } from './due-dates-reminder/due-dates-reminder';

const dueDateColorMap = {
	overdue: '#EF663B',
	upcoming: '#FCA50E',
	scheduled: '#0C4929',
};

export function DueDatesSection() {
	const { data } = useDueDatesStatisticsQuery();

	const processedData = useMemo(() => {
		if (data == null) {
			return [];
		}
		const dueDates = {
			overdue: {
				value: 0,
				color: dueDateColorMap['overdue'],
				id: 'overdue',
				label: 'Overdue',
				tooltip: 'Overdue dates refer to the dates vehicle has already expired',
			},
			scheduled: {
				value: 0,
				color: dueDateColorMap['scheduled'],
				id: 'scheduled',
				label: 'Scheduled',
				tooltip: 'Scheduled dates refer to future dates vehicle will expire',
			},
			upcoming: {
				value: 0,
				color: dueDateColorMap['upcoming'],
				id: 'upcoming',
				label: 'Upcoming',
				tooltip:
					'Scheduled dates refer to future dates vehicle will expire soon',
			},
		};
		data.forEach((item) => {
			dueDates[item.situation].value += Number(item.count);
		});
		return Object.values(dueDates);
	}, [data]);

	if (data == null) {
		return (
			<DashboardRow>
				<DueDatesChartSkeleton variant='rectangular' />
				<DueDatesRemindersSkeleton variant='rectangular' />
			</DashboardRow>
		);
	}

	return (
		<DashboardRow>
			<DueDatesCard data={processedData} />
			<DueDatesReminder data={data ?? []} />
		</DashboardRow>
	);
}
