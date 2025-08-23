'use client';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/core/store/store';

export function StoreProvider(props: PropsWithChildren) {
	return <Provider store={store}>{props.children}</Provider>;
}
