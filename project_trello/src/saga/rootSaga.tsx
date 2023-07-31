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
import * as listTaskSlice from '../redux/reducer/listTaskSlice';
import * as listTaskSaga from './listTaskSaga';
import * as taskSlice from '../redux/reducer/taskSlice';
import * as taskSaga from './taskSaga';
import * as dateTimeSlice from '../redux/reducer/dateTimeSlice';
import * as dateTimeSaga from './dateTimeSaga';
import * as backgroundSlice from '../redux/reducer/backgroundSlice';
import * as backgroundSaga from './backgroundSaga';
import * as memberSlice from '../redux/reducer/memberSlice';
import * as memberSaga from './memberSaga';

export const rootSaga = function* () {
  yield all([
    takeLatest(userSlice.createUser.type, userSaga.USER_SAGA_POST),

    takeLatest(userSlice.register.type, userSaga.USER_SAGA_REGISTER),

    takeLatest(userSlice.findAllUser.type, userSaga.USER_SAGA_GET),

    takeLatest(cardSlice.create.type, cardSaga.CARD_SAGA_POST),

    takeLatest(cardSlice.updateCard.type, cardSaga.CARD_SAGA_PUT),

    takeLatest(cardSlice.deleteCard.type, cardSaga.CARD_SAGA_DELETE),

    takeLatest(cardSlice.updateCard.type, cardSaga.CARD_SAGA_PATCH),

    takeLatest(cardSlice.findAllCard.type, cardSaga.CARD_SAGA_GET),

    takeLatest(laneSlice.createLane.type, laneSaga.LIST_SAGA_POST),

    takeLatest(laneSlice.findAllLane.type, laneSaga.LIST_SAGA_GET),

    takeLatest(laneSlice.updateLane.type, laneSaga.LIST_SAGA_PUT),

    takeLatest(laneSlice.updateLane.type, laneSaga.LANE_SAGA_PATCH),

    takeLatest(laneSlice.deleteLane.type, laneSaga.LANE_SAGA_DELETE),

    takeLatest(userSlice.login.type, userSaga.USER_SAGA_LOGIN),

    takeLatest(userSlice.findUserByEmail.type, userSaga.USER_SAGA_GET_BY_EMAIL),

    takeLatest(
      workingSpaceSlice.createWorkingSpace.type,
      workingSpaceSaga.WORKINGSPACE_SAGA_POST
    ),

    takeLatest(
      workingSpaceSlice.findAllWorkingSpace.type,
      workingSpaceSaga.WORKINGSPACE_SAGA_GET
    ),

    takeLatest(
      workingSpaceSlice.findWsByUserId.type,
      workingSpaceSaga.findProjectsByUserId
    ),

    takeLatest(boardSlice.createBoard.type, boardSaga.BOARD_SAGA_POST),

    takeLatest(boardSlice.findAllBoard.type, boardSaga.BOARD_SAGA_GET),

    takeLatest(
      listTaskSlice.findAllListTask.type,
      listTaskSaga.LISTTASK_SAGA_GET
    ),

    takeLatest(
      listTaskSlice.createListTask.type,
      listTaskSaga.LISTTASK_SAGA_POST
    ),

    takeLatest(
      listTaskSlice.updateListTask.type,
      listTaskSaga.LISTTASK_SAGA_PATCH
    ),

    takeLatest(
      listTaskSlice.deleteListTask.type,
      listTaskSaga.LISTTASK_SAGA_DELETE
    ),

    takeLatest(taskSlice.findAllTask.type, taskSaga.TASK_SAGA_GET),

    takeLatest(taskSlice.createTask.type, taskSaga.TASK_SAGA_POST),

    takeLatest(taskSlice.updateTask.type, taskSaga.TASK_SAGA_PATCH),

    takeLatest(taskSlice.deleteTask.type, taskSaga.TASK_SAGA_DELETE),

    takeLatest(
      dateTimeSlice.findAllDateTime.type,
      dateTimeSaga.DATETIME_SAGA_GET
    ),

    takeLatest(
      dateTimeSlice.createDateTime.type,
      dateTimeSaga.DATETIME_SAGA_POST
    ),

    takeLatest(
      dateTimeSlice.updateDateTime.type,
      dateTimeSaga.DATETIME_SAGA_PATCH
    ),

    takeLatest(
      dateTimeSlice.deleteDateTime.type,
      dateTimeSaga.DATETIME_SAGA_DELETE
    ),

    takeLatest(
      backgroundSlice.findAllBackground.type,
      backgroundSaga.BG_SAGA_GET
    ),
    takeLatest(
      backgroundSlice.findAllBgColor.type,
      backgroundSaga.BGC_SAGA_GET
    ),
    takeLatest(
      backgroundSlice.updateBgColor.type,
      backgroundSaga.BGC_SAGA_PATCH
    ),

    takeLatest(memberSlice.findAllMember.type, memberSaga.MEMBER_SAGA_GET),
    takeLatest(memberSlice.createMember.type, memberSaga.MEMBER_SAGA_POST),
    takeLatest(memberSlice.updateMember.type, memberSaga.MEMBER_SAGA_PATCH),
  ]);
};
