import { Button, Typography } from '@mui/material';

import { useT } from '@/app/i18n/client';

import { useDriverStatisticsQuery } from '../api';
import { HighlightedCard } from './highlighted-card/highlighted-card';

export function DriverSection() {
	const { t } = useT('dashboard');
	const { data, isLoading, refetch, isFetching } = useDriverStatisticsQuery();

	if (isLoading) {
		return (
			<HighlightedCard.Skeleton variant='rectangular'>
				<HighlightedCard>
					<HighlightedCard.Heading>{t('driver')}</HighlightedCard.Heading>
					<HighlightedCard.Content>
						<HighlightedCard.ItemLarge>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('total-no-of-drivers')}</Typography>
						</HighlightedCard.ItemLarge>
						<HighlightedCard.Separator />
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('on-duty')}</Typography>
						</HighlightedCard.Item>
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('off-duty')}</Typography>
						</HighlightedCard.Item>
					</HighlightedCard.Content>
				</HighlightedCard>
			</HighlightedCard.Skeleton>
		);
	}
	if (data == null) {
		return (
			<HighlightedCard>
				<HighlightedCard.Heading>{t('driver')}</HighlightedCard.Heading>
				<HighlightedCard.Content>
					<HighlightedCard.ItemLarge>
						{t('error-while-loading')}
						<p>
							<Button
								loading={isFetching}
								onClick={refetch}
								variant='contained'
								disableElevation
							>
								{t('refetch')}
							</Button>
						</p>
					</HighlightedCard.ItemLarge>
				</HighlightedCard.Content>
			</HighlightedCard>
		);
	}
	return (
		<HighlightedCard>
			<HighlightedCard.Heading>{t('driver')}</HighlightedCard.Heading>
			<HighlightedCard.Content>
				<HighlightedCard.ItemLarge>
					<Typography component='h2'>{data.driverCount}</Typography>
					<Typography component='p'>{t('total-no-of-drivers')}</Typography>
				</HighlightedCard.ItemLarge>
				<HighlightedCard.Separator />
				<HighlightedCard.Item>
					<Typography component='h2'>{data.onDutyCount}</Typography>
					<Typography component='p'>{t('on-duty')}</Typography>
				</HighlightedCard.Item>
				<HighlightedCard.Item>
					<Typography component='h2'>{data.offDutyCount}</Typography>
					<Typography component='p'>{t('off-duty')}</Typography>
				</HighlightedCard.Item>
			</HighlightedCard.Content>
		</HighlightedCard>
	);
}
