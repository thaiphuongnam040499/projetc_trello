import { createSlice } from '@reduxjs/toolkit';
import { Lane } from '../../types/lanes.type';
import { LaneType } from '../../types/lane.type';

interface ListState {
  lanes: LaneType[];
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
    updateLane: (state, action) => {},
    deleteLane: (state, action) => {},
  },
});
export default listSlice.reducer;
export const { createList, findAllList, getAllList, updateLane, deleteLane } =
  listSlice.actions;
