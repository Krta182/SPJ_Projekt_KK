import { ADD_POSTS, SET_POSTS } from "../actions";

const initialState = {
    numberOfLikes:[],
    numberOfComments:[],
    userPosts: [],
    posts:[],
   users:[],
  };

function addPosts(state,action){
  return {
    ...state,
    posts: [...state.posts, ...action.payload],
  };
}  

function setPosts(state,action){
  return {
    ...state,
    posts: [...state.posts, action.payload],
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