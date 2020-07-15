import { ADD_POSTS, SET_POSTS } from "../actions";

const initialState = {
    NumberofLikes:[],
    NumberofComments:[],
    userPosts: [],
    Posts:[],
   users:[],
  };

function addPosts(state,action){
  return {
    ...state,
    Posts: [...state.PostValue, ...action.payload],
    users: [...state.users, ...action.payload],
  };
}  

function setPosts(state,action){
  return {
    ...state,
    Posts: [...state.PostValue, ...action.payload],
  };
}  




  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_POSTS:
        return addPosts(state, action);
      case SET_POSTS:
        return setPosts(state, action);
  
  
      default:
        return state;
    }
  }