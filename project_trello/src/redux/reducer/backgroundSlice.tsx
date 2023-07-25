import { createSlice } from '@reduxjs/toolkit';
import { BgType } from '../../types/bg.type';

interface BackgroundState {
  backgrounds: BgType[];
}

const initialState: BackgroundState = {
  backgrounds: [],
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState: initialState,
  reducers: {
    findAllBackground: () => {},
    getAllBackground: (state, action) => {
      state.backgrounds = action.payload;
    },
  },
});
export default backgroundSlice.reducer;
export const { findAllBackground, getAllBackground } = backgroundSlice.actions;
