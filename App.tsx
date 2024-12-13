import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Routes from './src/routes/Routes';

export default function App() {
    console.log('app screen');

    const navigationRef: any = useNavigationContainerRef();
    const routeNameRef: any = React.useRef();

    return (
        <NavigationContainer
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
    );
}
