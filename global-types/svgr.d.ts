declare module '*.svg' {
	import type { FC, SVGProps } from 'react';
	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

declare module '*.svg?url' {
	const content: {
		blurHeight: number;
		blurWidth: number;
		height: number;
		src: string;
		width: number;
	};
	export default content;
}
