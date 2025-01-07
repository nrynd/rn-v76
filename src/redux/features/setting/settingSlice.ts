import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingSlice {
    toggleTheme(_mode: string): void,
    theme: string,
}

const initialState: SettingSlice = {
    toggleTheme: (_mode: string) => { },
    theme: 'dark',
};

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTheme } = settingSlice.actions;

export default settingSlice.reducer;
