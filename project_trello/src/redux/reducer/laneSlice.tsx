import { createSlice } from '@reduxjs/toolkit';
import { Lane } from '../../types/lanes.type';
import { ListType } from '../../types/list.type';

interface ListState {
  lanes: ListType[];
}

const initialState: ListState = {
  lanes: [],
};
export const listSlice = createSlice({
  name: 'lanes',
  initialState: initialState,
  reducers: {
    createList: (state, action) => {},
    findAllList: () => {},
    getAllList: (state, action) => {
      state.lanes = action.payload;
    },
    updateLane: (state, action) => {
      state.lanes = action.payload;
    },
  },
});
export default listSlice.reducer;
export const { createList, findAllList, getAllList, updateLane } =
  listSlice.actions;
