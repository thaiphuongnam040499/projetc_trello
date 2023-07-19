import { call, put } from 'redux-saga/effects';
import {
  CARD_DELETE_SERVICE,
  CARD_GET_SERVICE,
  CARD_PATCH_SERVICE,
  CARD_POST_SERVICE,
  CARD_PUT_SERVICE,
} from '../api/cardService';
import { getAllCard } from '../redux/reducer/cardSlice';

export const CARD_SAGA_GET = function* (): Generator<any, void, any> {
  try {
    let listCard = yield call(CARD_GET_SERVICE);
    yield put(getAllCard(listCard));
  } catch (error) {
    console.log(error);
  }
};

export const CARD_SAGA_POST = function* (action: any) {
  try {
    yield call(CARD_POST_SERVICE, action.payload);
  } catch (error) {
    console.log(error);
  }
};

export const CARD_SAGA_PUT = function* (action: any) {
  try {
    yield call(CARD_PUT_SERVICE, action.payload);
  } catch (error) {
    console.log(error);
  }
};

export const CARD_SAGA_PATCH = function* (action: any) {
  try {
    yield call(CARD_PATCH_SERVICE, action.payload);
    // yield CARD_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
};

export const CARD_SAGA_DELETE = function* (action: any) {
  try {
    yield call(CARD_DELETE_SERVICE, action.payload);
  } catch (error) {
    console.log(error);
  }
};
