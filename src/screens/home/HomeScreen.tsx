/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, LayoutAnimation } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, List, RadioButton, Button } from 'react-native-paper';
import { COLOR } from '../../constant/Colors';
import { RootState } from '../../redux/store';
import { GetTheme } from '../../helpers/general-helper';
import { setTheme } from '../../redux/features/setting/settingSlice';
import { logout } from '../../redux/features/auth/authSlice';

const theme_list = [
    {
        mode: 'flexible',
        title: 'Gunakan Pengaturan HP-mu',
        desc: 'Sesuaikan tampilan dengan mengikuti pengaturan di HP kamu.',
    },
    {
        mode: 'light',
        title: 'Light Mode',
        desc: 'Tampilan dengan warna cerah, cocok untuk digunakan di siang hari atau tempat terang',
    },
    {
        mode: 'dark',
        title: 'Dark Mode',
        desc: 'Tampilan dengan warna gelap, cocok untuk digunakan di malam hari atau tempat gelap.',
    },
];
const HomeScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state: RootState) => state.setting);
    const { t } = GetTheme();

    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            console.log('use effect home: ');

        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Card style={{ borderRadius: 0 }}>
                <List.Section>
                    <List.Accordion
                        title="Tampilan"
                        description="Atur tampilan warna"
                        titleStyle={{ fontWeight: 'bold', color: COLOR[t].primary }}

                        expanded={expanded}
                        onPress={() => {
                            LayoutAnimation.easeInEaseOut();
                            handlePress();
                        }}>
                        {theme_list.map(({ mode, title, desc }) => {
                            return (
                                <List.Item
                                    key={mode}
                                    title={title}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    description={desc}
                                    descriptionStyle={{ paddingRight: 10 }}
                                    right={() => (
                                        <RadioButton
                                            value={theme}
                                            status={theme === mode ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                if (theme === mode) {
                                                    return;
                                                }

                                                dispatch(setTheme(mode));
                                            }}
                                            color={COLOR[t].primary}
                                            uncheckedColor={COLOR[t].outline}
                                        />
                                    )}
                                />
                            );
                        })}
                    </List.Accordion>
                </List.Section>
            </Card>

            <Button
                dark={t === 'dark'}
                mode="contained"
                // buttonColor={COLOR[t].primary}
                textColor={COLOR[t].surface}
                style={{ borderRadius: 8, width: '50%', alignSelf: 'center' }}
                contentStyle={{ backgroundColor: COLOR[t].primary }}
                onPress={() => navigation.navigate('Article')}
            >
                Go to Article
            </Button>

            <Button
                dark={t === 'dark'}
                mode="contained"
                // buttonColor={COLOR[t].primary}
                textColor={COLOR[t].surface}
                style={{ borderRadius: 8, width: '50%', alignSelf: 'center' }}
                contentStyle={{ backgroundColor: COLOR[t].error }}
                onPress={() => dispatch(logout())}
            >
                Sign out
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
    },
    text: {
        textAlign: 'center',
    },
});

export default HomeScreen;
