import {configureStore} from '@reduxjs/toolkit';

import {articleApi} from './article';

// Store is a gobal state which stores entire info of the application like a pie with different slices
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});