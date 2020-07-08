import { combineReducers } from 'redux';
import users from './users';
import UserPosts from './UserPosts'

let reducers = {
  users,
  UserPosts
};

const rootReducer = combineReducers(reducers);

export default rootReducer;