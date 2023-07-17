import { intances } from './axios';
export const USER_POST_SERVICE = async (user: any) => {
  await intances.post('/register', user);
};
export const USER_GET_SERVICE = async (data: any) => {
  let response = await intances.post('/signin', data);
  console.log(response);

  return response.data;
};
