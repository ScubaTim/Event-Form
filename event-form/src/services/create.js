//import axios from 'axios';
import { call } from 'redux-saga/effects';
import index from '../index';
const baseUrl = 'http://localhost:3001/';

export default function* create(newObject) {
    console.log('new object in services ', newObject) //doesn't get hit
    return yield call(index.post, {
        path: baseUrl, newObject
    })
}