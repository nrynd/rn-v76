import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR } from '../../constant/Colors';
import { RootState } from '../../redux/store';
import { decrement, increment, incrementByAmount } from '../../redux/features/counter/counterSlice';
import { GetTheme } from '../../helpers/general-helper';

const ProductScreen = ({ }: any) => {
    const { t } = GetTheme();

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <View style={styles.row}>
                <Button
                    dark={t === 'dark'}
                    mode="contained"
                    contentStyle={{ backgroundColor: COLOR[t].primary }}
                    textColor={COLOR[t].surface}
                    onPress={() => dispatch(decrement())}
                    style={styles.btn}
                >
                    - Dec
                </Button>
                <Button
                    dark={t === 'dark'}
                    mode="contained"
                    contentStyle={{ backgroundColor: COLOR[t].primary }}
                    textColor={COLOR[t].surface}
                    onPress={() => dispatch(increment())}
                    style={styles.btn}
                >
                    + Inc
                </Button>
                <Button
                    dark={t === 'dark'}
                    mode="contained"
                    contentStyle={{ backgroundColor: COLOR[t].primary }}
                    textColor={COLOR[t].surface}
                    onPress={() => dispatch(incrementByAmount(10))}
                    style={styles.btn}
                >
                    + Inc 10
                </Button>
            </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    btn: {
        borderRadius: 8,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
});

export default ProductScreen;
