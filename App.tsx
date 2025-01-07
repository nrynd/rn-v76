import React, { useRef } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes/Routes';
import { COLOR } from './src/constant/Colors';
import { store, persistor } from './src/redux/store';
import { GetTheme } from './src/helpers/general-helper';


const AppContainer = () => {
    const navigationRef: any = useNavigationContainerRef();
    const routeNameRef: any = useRef();

    const { paperTheme, t } = GetTheme();

    return (
        <PaperProvider theme={paperTheme}>
            <StatusBar
                animated={true}
                backgroundColor={t === 'dark' ? COLOR[t].onPrimary : COLOR[t].primary}
            />
            <NavigationContainer
                theme={paperTheme}
                ref={navigationRef}
                onReady={() => {
                    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
                }}
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = navigationRef.current.getCurrentRoute().name;
                    const trackScreenView = (routeName: string) => {
                        // Your implementation of analytics goes here!
                        console.log('ROUTE NAME: ', routeName);
                    };

                    if (previousRouteName !== currentRouteName) {
                        // Replace the line below to add the tracker from a mobile analytics SDK
                        await trackScreenView(currentRouteName);
                    }

                    // Save the current route name for later comparison
                    routeNameRef.current = currentRouteName;
                }}
            >
                <Routes />
            </NavigationContainer>
        </PaperProvider>
    );
};

const LoadingPage = () => {
    const { t } = GetTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} color={COLOR[t].primary} />
        </View>
    );
};
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingPage />} persistor={persistor}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
}
