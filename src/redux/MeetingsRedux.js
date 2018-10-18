const initialState = {
  homePageMeetings: [],
  bookedMeetings: []
};

export const meetingsReducer = (state = initialState, action) => {
  if (action.type == MeetingTypes.SET_MEETINGS) {
    return { ...state, homePageMeetings: action.data }
  }
  else if (action.type == MeetingTypes.SET_BOOKED_MEETINGS) {
    return { ...state, bookedMeetings: action.data }
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
  setBookedMeetings: (data) => ({
    type: MeetingTypes.SET_BOOKED_MEETINGS,
    data: data
  })
}

export const MeetingTypes = {
  SET_MEETINGS: 'SET_MEETINGS',
  SET_BOOKED_MEETINGS: 'SET_BOOKED_MEETINGS'
};