import { Typography } from '@mui/material';
import { useMemo } from 'react';

import { useT } from '@/app/i18n/client';

import type { DueDatesData } from '../../types';
import {
	DueDatesContainer,
	DueDatesGrid,
	DueDatesGridItem,
	DueDatesHeading,
} from './due-dates-reminder.styles';

export interface DueDatesReminderProps {
	data: DueDatesData[];
}
export function DueDatesReminder(props: DueDatesReminderProps) {
	const { t } = useT('dashboard');
	const gridCells = useMemo(() => {
		return [
			{
				label: t('reminders.renewed'),
				value: props.data
					.filter((item) => item.tag === 'renew')
					.reduce((a, b) => a + Number(b.count), 0),
			},
			{
				label: t('reminders.insurance'),
				value: props.data
					.filter((item) => item.type === 'insurance')
					.reduce((a, b) => a + Number(b.count), 0),
			},
			{
				label: t('reminders.puspakom-service'),
				value: props.data
					.filter((item) => item.type === 'puspakom-service')
					.reduce((a, b) => a + Number(b.count), 0),
			},
			{
				label: t('reminders.road-tax'),
				value: props.data
					.filter((item) => item.type === 'road-tax')
					.reduce((a, b) => a + Number(b.count), 0),
			},
			{
				label: t('reminders.truck-permit'),
				value: props.data
					.filter((item) => item.type === 'truck-permit')
					.reduce((a, b) => a + Number(b.count), 0),
			},
			{
				label: t('reminders.general'),
				value: props.data
					.filter((item) => item.type === 'general')
					.reduce((a, b) => a + Number(b.count), 0),
			},
		];
	}, [props.data, t]);
	return (
		<DueDatesContainer>
			<DueDatesHeading>{t('reminder')}</DueDatesHeading>
			<DueDatesGrid>
				{gridCells.map((cell) => (
					<DueDatesGridItem key={cell.label}>
						<Typography component='h2'>{cell.value}</Typography>
						<Typography component='p'>{cell.label}</Typography>
					</DueDatesGridItem>
				))}
			</DueDatesGrid>
		</DueDatesContainer>
	);
}
