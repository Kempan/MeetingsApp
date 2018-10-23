const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type == MeetingTypes.SET_USER) {
    return { ...state, user: action.data }
  }
  else {
    return state;
  }
}

export const userActions = {
  setUser: (data) => ({
    type: MeetingTypes.SET_USER,
    data: data
  }),
}

export const MeetingTypes = {
  SET_USER: 'SET_USER',
};