const initialState = {
  homePageMeetings: [],
  bookedMeetings: [],
  createdMeetings: [],
  isLoading: false,
  error: false
};

export const meetingsReducer = (state = initialState, action) => {
  if (action.type == MeetingTypes.SET_MEETINGS) {
    return { ...state, homePageMeetings: action.data }
  }
  else if (action.type == MeetingTypes.SET_BOOKED_MEETINGS) {
    return { ...state, bookedMeetings: action.data }
  }
  else if (action.type == MeetingTypes.SET_CREATED_MEETINGS) {
    return { ...state, createdMeetings: action.data }
  }
  else if (action.type == MeetingTypes.GET_MEETINGS) {
    return { ...state, isLoading: true, error: false }
  }
  else if (action.type == MeetingTypes.GET_MEETINGS_SUCCESS) {
    return { ...state, isLoading: false, error: false }
  }
  else if (action.type == MeetingTypes.GET_MEETINGS_FAILURE) {
    return { ...state, isLoading: false, error: true }
  }
  else {
    return state;
  }
}

export const MeetingActions = {
  setMeetings: (data) => ({
    type: MeetingTypes.SET_MEETINGS,
    data: data
  }),
  setCreatedMeetings: (data) => ({
    type: MeetingTypes.SET_CREATED_MEETINGS,
    data: data
  }),
  setBookedMeetings: (data) => ({
    type: MeetingTypes.SET_BOOKED_MEETINGS,
    data: data
  }),
  getMeetings: () => ({
    type: MeetingTypes.GET_MEETINGS,
    data: {}
  }),
  getMeetingsSuccess: () => ({
    type: MeetingTypes.GET_MEETINGS_SUCCESS,
    data: {}
  }),
  getMeetingsFailure: () => ({
    type: MeetingTypes.GET_MEETINGS_FAILURE,
    data: {}
  })
}



export const MeetingTypes = {
  SET_MEETINGS: 'SET_MEETINGS',
  SET_BOOKED_MEETINGS: 'SET_BOOKED_MEETINGS',
  SET_CREATED_MEETINGS: 'SET_CREATED_MEETINGS',
  GET_MEETINGS: 'GET_MEETINGS',
  GET_MEETINGS_SUCCESS: 'GET_MEETING_SUCCESS',
  GET_MEETINGS_FAILURE: 'GET_MEETING_FAILURE'
};