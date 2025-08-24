import { Box, styled, Typography } from '@mui/material';

import InfoIcon from '../../assets/info.svg';

export const DueDatesCardContainer = styled(Box)({
	backgroundColor: '#F5F5F5',
	borderRadius: '8px',
	flex: 1,
});

export const CardHeading = styled(Box)({
	fontWeight: '600',
	fontSize: '16px',
	color: '#3C3C42',
	paddingBlock: '12px',
	paddingInline: '18px',
});

export const CardContent = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	minHeight: '200px',
	gap: '8px',
});

export const CardTotalContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '5px',
	alignItems: 'center',
	flex: '1',
});

export const CardTotalText = styled(Typography)({
	color: '#3C3C42',
	fontWeight: '600',
	fontSize: '36px',
});

export const CardTotalDescription = styled(Typography)({
	color: '#757575',
	fontSize: '12px',
});

export const CardTooltipIcon = styled(InfoIcon)({
	width: '14px',
	height: '14px',
});

export const CardLegendItemContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	paddingBlock: '8px',
});

export const CardLegendItemColorPreview = styled(Box)({
	width: '12px',
	height: '12px',
	borderRadius: '3px',
});

export const CardLegendItemInfoContainer = styled(Box)({
	fontSize: '11px',
	color: '#757575',
	fontWeight: '400',
});

export const CardLegendItemValueContainer = styled(Box)({
	fontSize: '12px',
	fontWeight: '600',
	color: '#757575',
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
});
