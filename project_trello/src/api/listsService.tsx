import { intances } from './axios';

export const LIST_GET_SERVICE = async () => {
  let response = await intances.get('lanes');
  return response.data;
};

export const LIST_POST_SERVICE = async (lanes: any) => {
  await intances.post('lanes', lanes);
};

export const LIST_PATCH_SERVICE = async (laneUp: any) => {
  await intances.patch('lanes/' + laneUp.id, laneUp);
  console.log(laneUp);
};
export const LIST_PUT_SERVICE = async (laneUp: any) => {
  await intances.put('lanes/' + laneUp.id, laneUp);
  console.log(laneUp);
};
