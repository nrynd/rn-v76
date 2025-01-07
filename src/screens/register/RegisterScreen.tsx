import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLOR } from '../../constant/Colors';
import { GetTheme } from '../../helpers/general-helper';

const RegisterScreen = ({ navigation }: any) => {
    const { t } = GetTheme();

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
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        label="Firts Name"
                        placeholder="Type your first name"
                        textColor={COLOR[t].primary}
                        outlineColor={COLOR[t].outline}
                        activeOutlineColor={COLOR[t].primary}
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        label="Last Name"
                        placeholder="Type your last name"
                        textColor={COLOR[t].primary}
                        outlineColor={COLOR[t].outline}
                        activeOutlineColor={COLOR[t].primary}
                        style={styles.input}
                    />

                    <View style={{ width: '80%', alignSelf: 'center', paddingVertical: 15 }}>
                        <Button
                            dark={t === 'dark'}
                            mode="contained"
                            textColor={COLOR[t].surface}
                            style={{ width: '100%', borderRadius: 8 }}
                            contentStyle={{ backgroundColor: COLOR[t].primary }}
                        >
                            Register
                        </Button>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                            <Text style={{ paddingRight: 5 }}>
                                Already have an account ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ fontWeight: 'bold', color: COLOR[t].primary }}>Login</Text>
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
        elevation: 1,
    },
});

export default RegisterScreen;
