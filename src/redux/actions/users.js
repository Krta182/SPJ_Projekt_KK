import { createAction } from '../../utils/action-helpers';

export const ADD_USER = 'ADD_USER';
export const addUser = createAction(ADD_USER);

export const SET_USER = 'SET_USER';
export const setUser = createAction(SET_USER);

export const FILTER_USERS = "FILTER_USERS";
export const filterUsers = createAction(FILTER_USERS);

export const EDIT_USER = "EDIT_USER";
export const editUserPassword = createAction(EDIT_USER);
