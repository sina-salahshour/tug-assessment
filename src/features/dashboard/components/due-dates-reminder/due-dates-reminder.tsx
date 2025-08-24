import { Typography } from '@mui/material';
import { useMemo } from 'react';

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
	const gridCells = useMemo(() => {
		return [
			{
				label: 'Renewed',
				value: props.data.filter((item) => item.tag === 'renew').length,
			},
			{
				label: 'Insurance',
				value: props.data.filter((item) => item.type === 'insurance').length,
			},
			{
				label: 'Puspakom Service',
				value: props.data.filter((item) => item.type === 'puspakom-service')
					.length,
			},
			{
				label: 'Road Tax',
				value: props.data.filter((item) => item.type === 'road-tax').length,
			},
			{
				label: 'Truck Permit',
				value: props.data.filter((item) => item.type === 'truck-permit').length,
			},
			{
				label: 'General',
				value: props.data.filter((item) => item.type === 'general').length,
			},
		];
	}, [props.data]);
	return (
		<DueDatesContainer>
			<DueDatesHeading>Reminder</DueDatesHeading>
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
