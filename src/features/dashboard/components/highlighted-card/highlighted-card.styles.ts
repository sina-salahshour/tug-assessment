import { Box, Skeleton, styled } from '@mui/material';

export const HighlightedCardContainer = styled(Box)({
	backgroundImage: 'linear-gradient(to right, #0081AA, #00AA4F)',
	borderRadius: '8px',
	overflow: 'hidden',
	maxWidth: '669px',
	color: 'white',
});

export const HighlightedCardHeading = styled(Box)({
	backgroundColor: '#00000020',
	paddingInline: '16px',
	fontSize: '16px',
	fontWeight: '600',
	height: '39px',
	color: 'white',
	display: 'flex',
	paddingBlock: '10px',
	alignItems: 'center',
});

export const HighlightedCardContent = styled(Box)({
	display: 'flex',
	minHeight: '98px',
});

export const HighlightedCardItem = styled(Box)({
	paddingTop: '19px',
	paddingBottom: '25px',
	width: '178px',
	minWidth: '0',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'& > h2': {
		fontWeight: '600',
		fontSize: '28px',
	},

	'& > p': {
		fontSize: '12px',
		fontWeight: '400px',
	},
});
export const HighlightedCardItemLarge = styled(HighlightedCardItem)({
	flex: 1,
});
export const HighlightedCardSeparator = styled(Box)({
	marginTop: '19px',
	marginBottom: '25px',
	width: '0px',
	borderRight: '1px solid #D8D8D8',
});
export const CardSkeleton = styled(Skeleton)({
	borderRadius: '8px',
	maxWidth: '669px',
	width: '100%',
});
