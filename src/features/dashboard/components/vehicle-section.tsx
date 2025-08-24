import { Button, Typography } from '@mui/material';

import { useT } from '@/app/i18n/client';

import { useVehicleStatisticsQuery } from '../api';
import { HighlightedCard } from './highlighted-card/highlighted-card';

export function VehicleSection() {
	const { data, isLoading, refetch, isFetching } = useVehicleStatisticsQuery();
	const { t } = useT();

	if (isLoading) {
		return (
			<HighlightedCard.Skeleton variant='rectangular'>
				<HighlightedCard>
					<HighlightedCard.Heading>{t('vehicle')}</HighlightedCard.Heading>
					<HighlightedCard.Content>
						<HighlightedCard.ItemLarge>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('total-no-of-vehicles')}</Typography>
						</HighlightedCard.ItemLarge>
						<HighlightedCard.Separator />
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('in-use')}</Typography>
						</HighlightedCard.Item>
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>{t('unused')}</Typography>
						</HighlightedCard.Item>
					</HighlightedCard.Content>
				</HighlightedCard>
			</HighlightedCard.Skeleton>
		);
	}
	if (data == null) {
		return (
			<HighlightedCard>
				<HighlightedCard.Heading>{t('vehicle')}</HighlightedCard.Heading>
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
					<Typography component='h2'>{data.vehicleCount}</Typography>
					<Typography component='p'>{t('total-no-of-vehicles')}</Typography>
				</HighlightedCard.ItemLarge>
				<HighlightedCard.Separator />
				<HighlightedCard.Item>
					<Typography component='h2'>{data.vehicleOnDutyCount}</Typography>
					<Typography component='p'>{t('in-use')}</Typography>
				</HighlightedCard.Item>
				<HighlightedCard.Item>
					<Typography component='h2'>{data.vehicleOffDutyCount}</Typography>
					<Typography component='p'>{t('unused')}</Typography>
				</HighlightedCard.Item>
			</HighlightedCard.Content>
		</HighlightedCard>
	);
}
