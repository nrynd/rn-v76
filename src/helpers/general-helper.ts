import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { RootState } from '../redux/store';
import { COLOR } from '../constant/Colors';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: COLOR.light,
    reactNavigationDark: COLOR.dark,
});

const CombinedDefaultTheme: any = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme: any = merge(MD3DarkTheme, DarkTheme);

export const GetTheme = () => {
    const { theme } = useSelector((state: RootState) => state.setting);
    const colorScheme = useColorScheme();

    const isThemeDark = theme === 'dark' || (theme === 'flexible' && colorScheme === 'dark');
    const paperTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
    const t = isThemeDark ? 'dark' : 'light';

    return { paperTheme, t };
};