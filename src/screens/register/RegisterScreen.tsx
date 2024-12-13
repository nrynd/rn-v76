import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register Screen</Text>
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

export default RegisterScreen;
