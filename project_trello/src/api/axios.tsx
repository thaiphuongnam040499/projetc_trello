import axios from 'axios';
export const intances = axios.create({
  baseURL: 'http://localhost:4000/api/',
});
