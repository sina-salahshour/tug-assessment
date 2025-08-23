import type { PropsWithChildren } from 'react';

import { StoreProvider } from './store-provider';
import { ThemeProvider } from './theme-provider/theme-provider';

export function Providers(props: PropsWithChildren) {
	return (
		<StoreProvider>
			<ThemeProvider>{props.children}</ThemeProvider>
		</StoreProvider>
	);
}
