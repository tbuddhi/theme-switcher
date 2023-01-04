import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme
            // localStorage.setItem('theme', state.darkTheme ? "darkTheme" : "lightTheme")
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer