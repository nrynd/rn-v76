import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Button title="Go to Article" onPress={() => navigation.navigate('Article')} />
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

export default ProductScreen;
