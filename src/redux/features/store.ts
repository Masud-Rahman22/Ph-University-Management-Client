import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { baseApi } from '../api/baseApi'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
const presistConfig = {
    key:'auth',
    storage
}
const presistedAuthReducer = persistReducer(presistConfig,authReducer) 
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath] : baseApi.reducer,
        auth: presistedAuthReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor =  persistStore(store) 