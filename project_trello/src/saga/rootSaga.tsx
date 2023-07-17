import { all, takeLatest } from 'redux-saga/effects';

import * as userSaga from './userSaga';
import * as userSlice from '../redux/reducer/userSlice';
import * as cardSlice from '../redux/reducer/cardSlice';
import * as cardSaga from './cardSaga';
import * as laneSlice from '../redux/reducer/laneSlice';
import * as laneSaga from './laneSaga';
import * as workingSpaceSlice from '../redux/reducer/workingSpaceSlice';
import * as workingSpaceSaga from './workingSpaceSaga';
import * as boardSlice from '../redux/reducer/boardSlice';
import * as boardSaga from './boardSaga';

export const rootSaga = function* () {
  yield all([
    takeLatest(userSlice.createUser.type, userSaga.USER_SAGA_POST),

    takeLatest(cardSlice.create.type, cardSaga.CARD_SAGA_POST),

    takeLatest(cardSlice.deleteCard.type, cardSaga.CARD_SAGA_DELETE),

    takeLatest(cardSlice.updateCard.type, cardSaga.CARD_SAGA_PATCH),

    takeLatest(cardSlice.findAllCard.type, cardSaga.CARD_SAGA_GET),

    takeLatest(laneSlice.createList.type, laneSaga.LIST_SAGA_POST),

    takeLatest(laneSlice.findAllList.type, laneSaga.LIST_SAGA_GET),

    takeLatest(laneSlice.updateLane.type, laneSaga.LIST_SAGA_PUT),

    takeLatest(laneSlice.deleteLane.type, laneSaga.LANE_SAGA_DELETE),

    takeLatest(userSlice.login.type, userSaga.USER_SAGA_LOGIN),

    takeLatest(
      workingSpaceSlice.createWorkingSpace.type,
      workingSpaceSaga.WORKINGSPACE_SAGA_POST
    ),

    takeLatest(
      workingSpaceSlice.findAllWorkingSpace.type,
      workingSpaceSaga.WORKINGSPACE_SAGA_GET
    ),

    takeLatest(boardSlice.createBoard.type, boardSaga.BOARD_SAGA_POST),

    takeLatest(boardSlice.findAllBoard.type, boardSaga.BOARD_SAGA_GET),
  ]);
};
