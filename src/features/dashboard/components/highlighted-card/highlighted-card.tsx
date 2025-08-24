import type { ComponentProps } from 'react';

import {
	CardSkeleton,
	HighlightedCardContainer,
	HighlightedCardContent,
	HighlightedCardHeading,
	HighlightedCardItem,
	HighlightedCardItemLarge,
	HighlightedCardSeparator,
} from './highlighted-card.styles';

export type HighlightedCardProps = ComponentProps<
	typeof HighlightedCardContainer
>;
export function HighlightedCard(props: HighlightedCardProps) {
	return (
		<HighlightedCardContainer {...props}>
			{props.children}
		</HighlightedCardContainer>
	);
}

HighlightedCard.Heading = HighlightedCardHeading;
HighlightedCard.Content = HighlightedCardContent;
HighlightedCard.Item = HighlightedCardItem;
HighlightedCard.ItemLarge = HighlightedCardItemLarge;
HighlightedCard.Separator = HighlightedCardSeparator;
HighlightedCard.Skeleton = CardSkeleton;
