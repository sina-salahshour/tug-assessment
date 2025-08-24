import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { store } from '../store';

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
		prepareHeaders: (header) => {
			const token = store.getState().user.idToken;
			if (token) {
				header.set('authorization', `Bearer ${token}`);
			}
			return header;
		},
	}),
	endpoints: () => ({}),
});
