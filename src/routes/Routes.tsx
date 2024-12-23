import React, { useContext } from 'react';
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
import { Context } from '../context/Context';
import { COLOR } from '../constant/Colors';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
    const { theme } = useContext(Context);
    const colorScheme = useColorScheme();

    const isThemeDark = theme === 'dark' || (theme === 'flexible' && colorScheme === 'dark');

    const t = isThemeDark ? 'dark' : 'light';

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                tabBarActiveTintColor: COLOR[t].primary,
                tabBarInactiveTintColor: COLOR[t].outline,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="house-chimney" color={COLOR[t].primary} style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="house-chimney" color={COLOR[t].outline} style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Products"
                component={ProductScreen}
                options={{
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="globe" color={COLOR[t].primary} style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="globe" color={COLOR[t].outline} style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="bars" color={COLOR[t].primary} style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="bars" color={COLOR[t].outline} style={{ fontSize: size }} />;
                        }

                        return icon;
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, size }: any) => {
                        let icon;

                        if (focused) {
                            icon = <IconFa name="user-large" color={COLOR[t].primary} style={{ fontSize: size }} />;
                        } else {
                            icon = <IconFa name="user-large" color={COLOR[t].outline} style={{ fontSize: size }} />;
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
        </Stack.Navigator>
    );
};

export default Routes;
