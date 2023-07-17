import { all, takeLatest } from 'redux-saga/effects';

import { USER_SAGA_LOGIN, USER_SAGA_POST } from './userSaga';
import { createUser, login } from '../redux/reducer/userSlice';
import { create, findAllCard, updateCard } from '../redux/reducer/cardSlice';
import {
  CARD_SAGA_GET,
  CARD_SAGA_PATCH,
  CARD_SAGA_POST,
  CARD_SAGA_PUT,
} from './cardSaga';
import {
  createList,
  findAllList,
  updateLane,
} from '../redux/reducer/laneSlice';
import { LIST_SAGA_GET, LIST_SAGA_POST, LIST_SAGA_PUT } from './listSaga';
import {
  createWorkingSpace,
  findAllWorkingSpace,
} from '../redux/reducer/workingSpaceSlice';
import {
  WORKINGSPACE_SAGA_GET,
  WORKINGSPACE_SAGA_POST,
} from './workingSpaceSaga';
import { createBoard, findAllBoard } from '../redux/reducer/boardSlice';
import { BOARD_SAGA_GET, BOARD_SAGA_POST } from './boardSaga';

export const rootSaga = function* () {
  yield all([
    takeLatest(createUser.type, USER_SAGA_POST),

    takeLatest(create.type, CARD_SAGA_POST),

    // takeLatest(updateCard.type, CARD_SAGA_PUT),

    takeLatest(updateCard.type, CARD_SAGA_PATCH),

    takeLatest(findAllCard.type, CARD_SAGA_GET),

    takeLatest(createList.type, LIST_SAGA_POST),

    takeLatest(findAllList.type, LIST_SAGA_GET),

    takeLatest(updateLane.type, LIST_SAGA_PUT),

    takeLatest(login.type, USER_SAGA_LOGIN),

    takeLatest(createWorkingSpace.type, WORKINGSPACE_SAGA_POST),

    takeLatest(findAllWorkingSpace.type, WORKINGSPACE_SAGA_GET),

    takeLatest(createBoard.type, BOARD_SAGA_POST),

    takeLatest(findAllBoard.type, BOARD_SAGA_GET),
  ]);
};
