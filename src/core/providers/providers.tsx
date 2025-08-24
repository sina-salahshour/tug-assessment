import type { PropsWithChildren } from 'react';

import { StoreProvider } from './store-provider';
import SyncAuthUser from './sync-auth-user';
import { ThemeProvider } from './theme-provider/theme-provider';

export function Providers(props: PropsWithChildren) {
	return (
		<StoreProvider>
			<ThemeProvider>
				{props.children}
				<SyncAuthUser />
			</ThemeProvider>
		</StoreProvider>
	);
}
