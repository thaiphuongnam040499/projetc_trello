import { call, put } from 'redux-saga/effects';
import { BG_GET_SERVICE } from '../api/backgroundService';
import { BgType } from '../types/bg.type';
import { getAllBackground } from '../redux/reducer/backgroundSlice';

export const BG_SAGA_GET = function* () {
  try {
    let bgs: BgType = yield call(BG_GET_SERVICE);
    yield put(getAllBackground(bgs));
  } catch (error) {
    console.log(error);
  }
};
