import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  activeLight: boolean;
}

const initialState: ThemeState = {
  activeLight: false,
};

export const themeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    toggleLightMode: (state) => {
      state.activeLight = !state.activeLight;
    },
  },
});

export const { toggleLightMode } = themeSlice.actions;

export default themeSlice.reducer;
