import React from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { COLOR } from '../../constant/Colors';
import { GetTheme } from '../../helpers/general-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/auth/authSlice';

const LoginScreen = ({ navigation }: any) => {
    const { t } = GetTheme();
    const dispatch = useDispatch();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                    <Image
                        source={require('../../assets/logo/cover.png')}
                        style={styles.logo}
                        resizeMethod="resize"
                        resizeMode="contain"
                    />
                    <TextInput
                        mode="outlined"
                        label="Email"
                        placeholder="Type your email"
                        textColor={COLOR[t].primary}
                        outlineColor={COLOR[t].outline}
                        activeOutlineColor={COLOR[t].primary}
                        onLayout={(event) => console.log('on Layout: ', event)}
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Type your password"
                        secureTextEntry
                        textColor={COLOR[t].primary}
                        outlineColor={COLOR[t].outline}
                        activeOutlineColor={COLOR[t].primary}
                        right={<TextInput.Icon icon="eye" color={COLOR[t].primary} />}
                        onLayout={(event) => console.log('on Layout: ', event)}
                        style={styles.input}
                    />

                    <View style={{ width: '80%', alignSelf: 'center' }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                            <Text style={{ paddingBottom: 10 }}>Forgot password ?</Text>
                        </TouchableOpacity>
                        <Button
                            dark={t === 'dark'}
                            mode="contained"
                            textColor={COLOR[t].surface}
                            style={{ width: '100%', borderRadius: 8 }}
                            contentStyle={{ backgroundColor: COLOR[t].primary }}
                            onPress={() => dispatch(login())}
                        >
                            Login
                        </Button>

                        <View style={{ width: '100%', paddingVertical: 20 }}>
                            <Text style={{ paddingBottom: 10, textAlign: 'center' }}>-- or login with: --</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20 }}>
                                <TouchableOpacity style={[styles.icon, styles.shadow, { backgroundColor: COLOR[t].onPrimary }]}>
                                    <Image
                                        source={require('../../assets/icon/google.png')}
                                        style={{ width: 30, height: 30, borderRadius: 15 }}
                                        resizeMethod="resize"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.icon, styles.shadow, { backgroundColor: COLOR[t].onPrimary }]}>
                                    <Image
                                        source={require('../../assets/icon/apple.png')}
                                        style={{ width: 30, height: 30 }}
                                        resizeMethod="resize"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.icon, styles.shadow, { backgroundColor: COLOR[t].onPrimary }]}>
                                    <Image
                                        source={require('../../assets/icon/facebook.png')}
                                        style={{ width: 30, height: 30 }}
                                        resizeMethod="resize"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                            <Text style={{ paddingRight: 5 }}>
                                Don't have an account ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={{ fontWeight: 'bold', color: COLOR[t].primary }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginVertical: 20,
        alignSelf: 'center',
    },
    input: {
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
    },
    icon: {
        width: 38,
        height: 38,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
});

export default LoginScreen;
