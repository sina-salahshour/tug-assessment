'use client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';

import { theme } from './theme';

export function ThemeProvider(props: PropsWithChildren) {
	return (
		<MuiThemeProvider theme={theme}>
			{props.children}
			<CssBaseline />
		</MuiThemeProvider>
	);
}
