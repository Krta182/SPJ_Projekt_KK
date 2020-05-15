import { ADD_USER } from "../actions";

const initialState = {
  users: [
    {
      email: "kristijan.krtalic@gmail.com",
      password: "TestUser",
      name: "Kristijan",
      isAuth: true,
    },
  ],
  currentUser: {
    isAuth: true,
    email: "",
  },
};

function addUser(state, action) {
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);

    default:
      return state;
  }
}
