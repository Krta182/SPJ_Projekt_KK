import { ADD_USER, SET_USER, FILTER_USERS } from "../actions";

const initialState = {
  filteredUsers: [],
  users: [],
  currentUser: {
    isAuth: false,
  },
};

function setUser(state, action) {
  const match = state.users.find(
    (user) =>
      user.email === action.payload.email &&
      user.password === action.payload.password
  );
  const user = match ? match : null;

  return {
    ...state,
    currentUser: {
      isAuth: Boolean(user),
      ...user,
    },
  };
}
function addUser(state, action) {
  return {
    ...state,
    users: [...state.users, ...action.payload],
  };
}

function filterUsers(state, action) {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(
      (user) =>
        user.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
    ),
  });
}
/*
function editUserPassword(state,action){
  const index = state.users.findIndex(c => c.id === action.payload.id);
  return {
    ...state,
    users: [
      ...state.users.slice(0,index),
      action.payload,
      ...state.users.slice(index + 1)
    ],
  }
}
*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_USER:
      return setUser(state, action);

    case FILTER_USERS:
      return filterUsers(state, action);

    default:
      return state;
  }
}
