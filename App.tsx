import React, { useCallback, useMemo, useRef, useState } from 'react';
import { PaperProvider, MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { COLOR } from './src/constant/Colors';
import { StatusBar, useColorScheme } from 'react-native';
import { Context } from './src/context/Context';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: COLOR.light,
    reactNavigationDark: COLOR.dark,
});

const CombinedDefaultTheme: any = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme: any = merge(MD3DarkTheme, DarkTheme);


export default function App() {
    const [theme, setTheme] = useState('light');

    const navigationRef: any = useNavigationContainerRef();
    const routeNameRef: any = useRef();
    const colorScheme = useColorScheme();

    const toggleTheme = useCallback((t: string) => {
        return setTheme(t);
    }, []);

    const preferences: any = useMemo(
        () => ({ toggleTheme, theme }),
        [toggleTheme, theme]
    );

    // const paperTheme =
    //     colorScheme === 'dark'
    //         ? CombinedDarkTheme
    //         : CombinedDefaultTheme;

    const isThemeDark = theme === 'dark' || (theme === 'flexible' && colorScheme === 'dark');
    const paperTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
    const t = isThemeDark ? 'dark' : 'light';

    return (
        <Context.Provider value={preferences}>
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
                            console.log('Route Name: ', routeName);
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
        </Context.Provider>
    );
}
