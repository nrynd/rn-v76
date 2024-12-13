import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
});

export default LoginScreen;
