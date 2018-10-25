const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type == UserTypes.SET_USER) {
    return { ...state, user: action.data }
  }
  else {
    return state;
  }
}

export const UserActions = {
  setUser: (data) => ({
    type: UserTypes.SET_USER,
    data: data
  }),
  getUser: () => ({
    type: UserTypes.GET_USER,
    data: {}
  })
}

export const UserTypes = {
  SET_USER: 'SET_USER',
  GET_USER: 'GET_USER'
};