import axios from 'axios';

export const xhr = axios.create({
  baseURL: 'http://192.168.0.149:3333',
});
