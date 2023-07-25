import { createSlice } from '@reduxjs/toolkit';
import { MemberType } from '../../types/member.type';

interface MemberState {
  members: MemberType[];
}

const initialState: MemberState = {
  members: [],
};

export const memberSlice = createSlice({
  name: 'member',
  initialState: initialState,
  reducers: {
    getAllMember: (state, action) => {
      state.members = action.payload;
    },
    findAllMember: () => {},
    createMember: (state, action) => {},
    updateMember: (state, action) => {},
    deleteMember: (state, action) => {},
  },
});
export default memberSlice.reducer;
export const {
  getAllMember,
  findAllMember,
  createMember,
  updateMember,
  deleteMember,
} = memberSlice.actions;
