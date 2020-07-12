import { ADD_POSTS, SET_POSTS } from "../actions";

const initialState = {
    NumberofLikes:[],
    NumberofComments:[],
    userPosts: [],
    PostValue:[],
    UserImages:[]
  };

function addPosts(state,action){

}  

function setPosts(state,action){

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