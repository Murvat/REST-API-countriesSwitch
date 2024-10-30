import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name: '@@theme',
    initialState: 'light',
    reducers: {
        setTheme: (_, action) => action.payload,
    }
});

export const { setTheme } = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;