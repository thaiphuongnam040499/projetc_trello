import { createSlice } from '@reduxjs/toolkit';
import { BoardType } from '../../types/board.type';

interface BoardState {
  listBoard: BoardType[];
}

const initialState: BoardState = {
  listBoard: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    createBoard: (state, action) => {},
    findAllBoard: () => {},
    getAllBoard: (state, action) => {
      state.listBoard = action.payload;
    },
  },
});

export default boardSlice.reducer;
export const { createBoard, findAllBoard, getAllBoard } = boardSlice.actions;
