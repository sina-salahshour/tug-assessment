import { Button, Typography } from '@mui/material';

import { useVehicleStatisticsQuery } from '../api';
import { HighlightedCard } from './highlighted-card/highlighted-card';

export function VehicleSection() {
	const { data, isLoading, refetch, isFetching } = useVehicleStatisticsQuery();

	if (isLoading) {
		return (
			<HighlightedCard.Skeleton variant='rectangular'>
				<HighlightedCard>
					<HighlightedCard.Heading>Vehicle</HighlightedCard.Heading>
					<HighlightedCard.Content>
						<HighlightedCard.ItemLarge>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>Total no. of vehicles</Typography>
						</HighlightedCard.ItemLarge>
						<HighlightedCard.Separator />
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>In Use</Typography>
						</HighlightedCard.Item>
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>Unused</Typography>
						</HighlightedCard.Item>
					</HighlightedCard.Content>
				</HighlightedCard>
			</HighlightedCard.Skeleton>
		);
	}
	if (data == null) {
		return (
			<HighlightedCard>
				<HighlightedCard.Heading>Driver</HighlightedCard.Heading>
				<HighlightedCard.Content>
					<HighlightedCard.ItemLarge>
						Error while loading
						<p>
							<Button
								loading={isFetching}
								onClick={refetch}
								variant='contained'
								disableElevation
							>
								refetch
							</Button>
						</p>
					</HighlightedCard.ItemLarge>
				</HighlightedCard.Content>
			</HighlightedCard>
		);
	}
	return (
		<HighlightedCard>
			<HighlightedCard.Heading>Driver</HighlightedCard.Heading>
			<HighlightedCard.Content>
				<HighlightedCard.ItemLarge>
					<Typography component='h2'>{data.vehicleCount}</Typography>
					<Typography component='p'>Total no. of vehicles</Typography>
				</HighlightedCard.ItemLarge>
				<HighlightedCard.Separator />
				<HighlightedCard.Item>
					<Typography component='h2'>{data.vehicleOnDutyCount}</Typography>
					<Typography component='p'>In Use</Typography>
				</HighlightedCard.Item>
				<HighlightedCard.Item>
					<Typography component='h2'>{data.vehicleOffDutyCount}</Typography>
					<Typography component='p'>Unused</Typography>
				</HighlightedCard.Item>
			</HighlightedCard.Content>
		</HighlightedCard>
	);
}
