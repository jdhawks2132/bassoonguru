import { configureStore } from '@reduxjs/toolkit';
import { guruApi } from './guruAPI';

export const store = configureStore({
	reducer: {
		[guruApi.reducerPath]: guruApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(guruApi.middleware),
});
