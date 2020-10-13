import axios from 'axios';
//import { call } from 'redux-saga/effects';
//import index from '../index';
const baseUrl = 'http://localhost:3001/';

export default async function* getAll() {
    const response = await axios.get(baseUrl);
    return response.data;
};