import {
    persistStore,
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './features/auth/authSlice';
import counterReducer from './features/counter/counterSlice';
import settingReducer from './features/setting/settingSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['setting'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
    setting: settingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware): any => [
        ...getDefaultMiddleware({
            serializableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }),
    ],
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
