import { ADD_USER, SET_USER, FILTER_USERS, FOLLOW_USER} from "../actions";

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
    filteredUsers: [...state.users, ...action.payload],
  };
}

function filterUsers(state, action) {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(
      user =>
        user.name.toLowerCase().search(action.payload.toLowerCase) !== -1
    )
  });
}

function followUser(state, action) {
  if (state.idCollector.some((user) => user.id === action.payload)) {
    return {
      ...state,
      idCollector: state.idCollector.filter(
        ((user) => user.id !== action.payload)
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

      

    default:
      return state;
  }
}
