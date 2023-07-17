import { call, put } from 'redux-saga/effects';
import {
  WORKINGSPACE_GET_SERVICE,
  WORKINGSPACE_POST_SERVICE,
} from '../api/workingSpaceService';
import {
  createWorkingSpace,
  getAllWorkingSpace,
} from '../redux/reducer/workingSpaceSlice';
import { WorkingSpaceType } from '../types/workingSpace.type';
import { PayloadAction } from '@reduxjs/toolkit';

export const WORKINGSPACE_SAGA_GET = function* (): Generator<any, void, any> {
  try {
    let listWorkingSpace = yield call(WORKINGSPACE_GET_SERVICE);
    yield put(getAllWorkingSpace(listWorkingSpace));
  } catch (error) {
    console.log(error);
  }
};

export const WORKINGSPACE_SAGA_POST = function* (
  action: PayloadAction<WorkingSpaceType>
) {
  try {
    yield call(WORKINGSPACE_POST_SERVICE, action.payload);
    yield WORKINGSPACE_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
};
