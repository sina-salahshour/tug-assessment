import { Box } from '@mui/material';
import { PieChart, type PieValueType } from '@mui/x-charts';

import { useT } from '@/app/i18n/client';

import { CardLegendItem } from './card-legend-item';
import {
	CardContent,
	CardHeading,
	CardTotalContainer,
	CardTotalDescription,
	CardTotalText,
	DueDatesCardContainer,
} from './due-dates-card.styles';

export type DueDateSerieType = PieValueType & { tooltip?: string };

export interface DueDatesCardProps {
	data: DueDateSerieType[];
}
export function DueDatesCard(props: DueDatesCardProps) {
	const { t } = useT('dashboard');
	const totalSum = props.data.reduce((a, b) => a + b.value, 0);
	return (
		<DueDatesCardContainer>
			<CardHeading>{t('due-dates')}</CardHeading>
			<CardContent>
				<PieChart
					series={[
						{
							data: props.data,
							innerRadius: 40,
							paddingAngle: 0,
							cornerRadius: 0,
						},
					]}
					width={148}
					height={148}
					slotProps={{ legend: { sx: { display: 'none' } } }}
				/>
				<Box>
					{props.data.map((item) => (
						<CardLegendItem data={item} key={item.id} />
					))}
				</Box>
				<CardTotalContainer>
					<CardTotalText>{totalSum.toLocaleString()}</CardTotalText>
					<CardTotalDescription>{t('total-reminders')}</CardTotalDescription>
				</CardTotalContainer>
			</CardContent>
		</DueDatesCardContainer>
	);
}
