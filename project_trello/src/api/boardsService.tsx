import { BoardType } from '../types/board.type';
import { intances } from './axios';

export const BOARD_GET_SERVICE = async () => {
  let response = await intances.get('boards?_embed=workingSpace');
  return response.data;
};

export const BOARD_POST_SERVICE = async (data: BoardType) => {
  await intances.post('boards', data);
};
