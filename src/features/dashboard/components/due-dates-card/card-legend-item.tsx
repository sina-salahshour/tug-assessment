import { Tooltip } from '@mui/material';

import type { DueDateSerieType } from './due-dates-card';
import {
	CardLegendItemColorPreview,
	CardLegendItemContainer,
	CardLegendItemInfoContainer,
	CardLegendItemValueContainer,
	CardTooltipIcon,
} from './due-dates-card.styles';

export interface CardLegendItemProps {
	data: DueDateSerieType;
}
export function CardLegendItem({ data }: CardLegendItemProps) {
	const legend = (
		<CardLegendItemContainer>
			<CardLegendItemColorPreview
				sx={{
					backgroundColor: data.color,
				}}
			></CardLegendItemColorPreview>
			<CardLegendItemInfoContainer>
				<CardLegendItemValueContainer>
					{data.value} <CardTooltipIcon />
				</CardLegendItemValueContainer>
				{data.label?.toString()}
			</CardLegendItemInfoContainer>
		</CardLegendItemContainer>
	);

	if (data.tooltip) {
		return <Tooltip title={data.tooltip}>{legend}</Tooltip>;
	}
	return legend;
}
