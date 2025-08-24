import { Button, Typography } from '@mui/material';

import { useDriverStatisticsQuery } from '../api';
import { HighlightedCard } from './highlighted-card/highlighted-card';

export function DriverSection() {
	const { data, isLoading, refetch, isFetching } = useDriverStatisticsQuery();

	if (isLoading) {
		return (
			<HighlightedCard.Skeleton variant='rectangular'>
				<HighlightedCard>
					<HighlightedCard.Heading>Driver</HighlightedCard.Heading>
					<HighlightedCard.Content>
						<HighlightedCard.ItemLarge>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>Total no. of drivers</Typography>
						</HighlightedCard.ItemLarge>
						<HighlightedCard.Separator />
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>On duty</Typography>
						</HighlightedCard.Item>
						<HighlightedCard.Item>
							<Typography component='h2'>.</Typography>
							<Typography component='p'>Off duty</Typography>
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
					<Typography component='h2'>{data.driverCount}</Typography>
					<Typography component='p'>Total no. of drivers</Typography>
				</HighlightedCard.ItemLarge>
				<HighlightedCard.Separator />
				<HighlightedCard.Item>
					<Typography component='h2'>{data.onDutyCount}</Typography>
					<Typography component='p'>On duty</Typography>
				</HighlightedCard.Item>
				<HighlightedCard.Item>
					<Typography component='h2'>{data.offDutyCount}</Typography>
					<Typography component='p'>Off duty</Typography>
				</HighlightedCard.Item>
			</HighlightedCard.Content>
		</HighlightedCard>
	);
}
