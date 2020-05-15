import { combineReducers } from 'redux';
import users from './users';

let reducers = {
  users
};

const rootReducer = combineReducers(reducers);

export default rootReducer;