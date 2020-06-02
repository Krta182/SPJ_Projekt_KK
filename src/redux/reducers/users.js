import { ADD_USER, SET_USER } from "../actions";

const initialState = {
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
    users: [...state.users, ...action.payload]
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
  case SET_USER:
  return setUser(state,action);

    default:
      return state;
  }
}
