import { Box, Skeleton, styled, Typography } from '@mui/material';

export const DashboardGreetingWrapper = styled(Typography)({
	fontWeight: '600',
	fontSize: '24px',
	color: '#3C3C42',
});
export const DashboardRow = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '31px',
	flex: 1,
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		gap: '16px',
	},
}));

export const DashboardContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '21px',
	padding: '38px',
});

export const RowHeading = styled(Box)({
	fontWeight: '600',
	fontSize: '16px',
	color: '#3C3C42',
	paddingBlock: '12px',
});

export const DueDatesChartSkeleton = styled(Skeleton)({
	minHeight: '249px',
	maxWidth: 'none',
	borderRadius: '8px',
	flex: 1,
});
export const DueDatesRemindersSkeleton = styled(Skeleton)({
	minHeight: '249px',
	maxWidth: 'none',
	borderRadius: '8px',
	flex: 1,
});
