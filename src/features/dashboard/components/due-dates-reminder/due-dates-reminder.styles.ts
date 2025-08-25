import { Box, styled, Typography } from '@mui/material';

export const DueDatesContainer = styled(Box)({
	flex: 1,
});
export const DueDatesHeading = styled(Typography)({
	color: '#3C3C42',
	fontSize: '16px',
	paddingBottom: '14px',
	fontWeight: '600',
});

export const DueDatesGrid = styled(Box)({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	rowGap: '8px',
	columnGap: '14px',
});

export const DueDatesGridItem = styled(Box)({
	backgroundColor: '#F5F5F5',
	borderRadius: '8px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	paddingBlock: '24px',
	textAlign: 'center',

	'& > h2': {
		fontSize: '28px',
		fontWeight: '600',
		color: '#3C3C42',
	},
	'& > p': {
		fontSize: '12px',
		fontWeight: '400',
		color: '#757575',
	},
});
