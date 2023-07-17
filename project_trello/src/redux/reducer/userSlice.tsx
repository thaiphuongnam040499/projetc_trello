import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user.type';

interface UserState {
  listUser: User[];
  userLogin: null;
}
const initialState: UserState = {
  userLogin: null,
  listUser: [],
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {},
    login: (state, action) => {},
    getUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { createUser, login, getUserLogin } = userSlice.actions;
