import { call, put } from 'redux-saga/effects';
import { BOARD_GET_SERVICE, BOARD_POST_SERVICE } from '../api/boardsService';
import { getAllBoard } from '../redux/reducer/boardSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { BoardType } from '../types/board.type';
import { WorkingSpaceType } from '../types/workingSpace.type';

export const BOARD_SAGA_GET = function* (): Generator<any, void, any> {
  try {
    let listBoard = yield call(BOARD_GET_SERVICE);
    yield put(getAllBoard(listBoard));
  } catch (error) {
    console.log(error);
  }
};

export const BOARD_SAGA_POST = function* (action: PayloadAction<BoardType>) {
  try {
    yield call(BOARD_POST_SERVICE, action.payload);
    yield BOARD_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
};
