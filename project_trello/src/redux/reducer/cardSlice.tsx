import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card } from 'react-trello-ts/dist/types/Board';

interface CardState {
  listCard: Card[];
}

const initialState: CardState = {
  listCard: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    create: (state, action: PayloadAction<Card>) => {},
    getAllCard: (state, action: PayloadAction<Card[]>) => {
      state.listCard = action.payload;
    },
    findAllCard: () => {},
    updateCard: (state, action) => {},
    deleteCard: (state, action) => {},
  },
});

export default cardSlice.reducer;
export const { create, findAllCard, getAllCard, updateCard, deleteCard } =
  cardSlice.actions;
