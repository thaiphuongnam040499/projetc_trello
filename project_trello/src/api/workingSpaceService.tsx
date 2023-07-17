import { WorkingSpaceType } from '../types/workingSpace.type';
import { intances } from './axios';

export const WORKINGSPACE_GET_SERVICE = async () => {
  let response = await intances.get('workingSpace');
  return response.data;
};

export const WORKINGSPACE_POST_SERVICE = async (data: WorkingSpaceType) => {
  await intances.post('workingSpace', data);
};
