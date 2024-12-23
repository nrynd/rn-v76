/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import { View, StyleSheet, LayoutAnimation, useColorScheme } from 'react-native';
import { Button, Card, List, RadioButton, Text } from 'react-native-paper';
import { COLOR } from '../../constant/Colors';
import { Context } from '../../context/Context';

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
    const { toggleTheme, theme } = useContext(Context);
    const colorScheme = useColorScheme();
    const isThemeDark = theme === 'dark' || (theme === 'flexible' && colorScheme === 'dark');

    const t = isThemeDark ? 'dark' : 'light';

    const [expanded, setExpanded] = useState(true);
    // const [selectedTheme, setSelectedTheme] = useState('light');

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>{`Selected Theme:  ${selectedTheme}`}</Text> */}

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

                                                // setSelectedTheme(mode);

                                                toggleTheme(mode);
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
                mode="contained"
                buttonColor={COLOR[t].primary}
                textColor={COLOR[t].surface}
                onPress={() => navigation.navigate('Article')}
                style={{ borderRadius: 8, width: '50%', alignSelf: 'center' }}
            >
                Go to Article
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        gap: 20,
    },
    text: {
        textAlign: 'center',
    },
});

export default HomeScreen;
