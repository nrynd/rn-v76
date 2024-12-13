import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFa from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from '../screens/home/HomeScreen';
import ProductScreen from '../screens/product/ProductScreen';
import MenuScreen from '../screens/menu/MenuScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ArticleScreen from '../screens/article/ArticleScreen';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: '#22d3ee',
                    tabBarInactiveTintColor: '#cbd5e1',
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="house-chimney" color="#22d3ee" style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="house-chimney" color="#cbd5e1" style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Products"
                component={ProductScreen}
                options={{
                    tabBarActiveTintColor: '#22d3ee',
                    tabBarInactiveTintColor: '#cbd5e1',
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="globe" color="#22d3ee" style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="globe" color="#cbd5e1" style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarActiveTintColor: '#22d3ee',
                    tabBarInactiveTintColor: '#cbd5e1',
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="bars" color="#22d3ee" style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="bars" color="#cbd5e1" style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarActiveTintColor: '#22d3ee',
                    tabBarInactiveTintColor: '#cbd5e1',
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="user-large" color="#22d3ee" style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="user-large" color="#cbd5e1" style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const Routes = () => {
    const isLoggedIn = true;

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Group>
                    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Article" component={ArticleScreen} />
                </Stack.Group>
            ) : (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SignIn" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={RegisterScreen} />
                </Stack.Group>
            )}
            {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Invite" component={Invite} />
            </Stack.Group> */}
        </Stack.Navigator>
    );
};

export default Routes;
