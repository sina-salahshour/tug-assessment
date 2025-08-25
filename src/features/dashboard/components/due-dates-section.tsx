import { useMemo } from 'react';

import { useT } from '@/app/i18n/client';

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
	const { t } = useT('dashboard');

	const processedData = useMemo(() => {
		if (data == null) {
			return [];
		}
		const dueDates = {
			overdue: {
				value: 0,
				color: dueDateColorMap['overdue'],
				id: 'overdue',
				label: t('duedates.overdue'),
				tooltip: t('duedates.overdue-tooltip'),
			},
			scheduled: {
				value: 0,
				color: dueDateColorMap['scheduled'],
				id: 'scheduled',
				label: t('duedates.scheduled'),
				tooltip: t('duedates.scheduled-tooltip'),
			},
			upcoming: {
				value: 0,
				color: dueDateColorMap['upcoming'],
				id: 'upcoming',
				label: t('duedates.upcoming'),
				tooltip: t('duedates.upcoming-tooltip'),
			},
		};
		data.forEach((item) => {
			dueDates[item.situation].value += Number(item.count);
		});
		return Object.values(dueDates);
	}, [data, t]);

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
