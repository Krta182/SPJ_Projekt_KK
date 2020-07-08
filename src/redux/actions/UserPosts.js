import { createAction } from '../../utils/action-helpers';

export const ADD_POSTS = 'ADD_POSTS';
export const addUser = createAction(ADD_POSTS);

export const SET_POSTS = 'SET_POSTS';
export const setUser = createAction(SET_POSTS);