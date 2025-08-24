import '../globals.css';

import type { PropsWithChildren } from 'react';

import { Providers } from '@/core/providers/providers';

export default function RootLayout(props: PropsWithChildren) {
	return (
		<html>
			<body>
				<Providers>{props.children}</Providers>
			</body>
		</html>
	);
}
