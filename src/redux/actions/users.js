import { createAction } from '../../utils/action-helpers';

export const ADD_USER = 'ADD_USER';
export const addUser = createAction(ADD_USER);

export const SET_USER = 'SET_USER';
export const setUser = createAction(SET_USER);

export const FILTER_USERS = "FILTER_USERS";
export const filterUsers = createAction(FILTER_USERS);

export const FOLLOW_USER = "FOLLOW_USER";
export const followUser = createAction(FOLLOW_USER);
