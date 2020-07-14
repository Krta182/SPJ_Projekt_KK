import { ADD_USER, SET_USER, FILTER_USERS, FOLLOW_USER,REMOVE_FOLLOWED_USER } from "../actions";

const initialState = {
  filteredUsers: [],
  users: [],
  idCollector: [],
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
    filteredUsers: [...state.filteredUsers, ...action.payload],
  };
}

function filterUsers(state, action) {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(
      user =>
        user.name.search(action.payload) !== -1
    )
  });
}

function followUser(state, action) {
  if (state.idCollector.some((user) => user.id === action.payload)) {
    return {
      ...state,
      idCollector: state.idCollector.filter(
        state.users.find((user) => user.id !== action.payload)
      ),
    };
  } else {
    return {
      ...state,
      idCollector: state.idCollector.concat(
        state.users.find((user) => user.id === action.payload)
      ),
    };
  }
}

function removeFollowedUser(state, action) {
  return {
    ...state,
    users: [
      ...state.users.slice(0, action.payload),
      ...state.users.slice(action.payload + 1)
    ],
    idCollector: [
      ...state.idCollector.slice(0, action.payload),
      ...state.idCollector.slice(action.payload + 1)
    ],
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_USER:
      return setUser(state, action);

    case FILTER_USERS:
      return filterUsers(state, action);

    case FOLLOW_USER:
      return followUser(state, action);

      case REMOVE_FOLLOWED_USER:
        return removeFollowedUser(state,action)
      

    default:
      return state;
  }
}
