import { createSlice } from '@reduxjs/toolkit';
import { WorkingSpaceType } from '../../types/workingSpace.type';

interface WorkingSpaceState {
  listWorkingSpace: WorkingSpaceType[];
}

const initialState: WorkingSpaceState = {
  listWorkingSpace: [],
};

export const workingSpaceSlice = createSlice({
  name: 'workingSpace',
  initialState: initialState,
  reducers: {
    createWorkingSpace: (state, action) => {},

    findAllWorkingSpace: () => {},

    getAllWorkingSpace: (state, action) => {
      state.listWorkingSpace = action.payload;
    },
  },
});
export default workingSpaceSlice.reducer;

export const { createWorkingSpace, findAllWorkingSpace, getAllWorkingSpace } =
  workingSpaceSlice.actions;
