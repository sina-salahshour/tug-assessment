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
	const { t } = useT();
	const gridCells = useMemo(() => {
		return [
			{
				label: t('reminders.renewed'),
				value: props.data.filter((item) => item.tag === 'renew').length,
			},
			{
				label: t('reminders.insurance'),
				value: props.data.filter((item) => item.type === 'insurance').length,
			},
			{
				label: t('reminders.puspakom-service'),
				value: props.data.filter((item) => item.type === 'puspakom-service')
					.length,
			},
			{
				label: t('reminders.road-tax'),
				value: props.data.filter((item) => item.type === 'road-tax').length,
			},
			{
				label: t('reminders.truck-permit'),
				value: props.data.filter((item) => item.type === 'truck-permit').length,
			},
			{
				label: t('reminders.general'),
				value: props.data.filter((item) => item.type === 'general').length,
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
