import '../globals.css';

import type { PropsWithChildren } from 'react';

export default function RootLayout(props: PropsWithChildren) {
	return (
		<html>
			<body>{props.children} </body>
		</html>
	);
}
