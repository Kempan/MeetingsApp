const initialState = {
  data: []
};

export const setMeetings = (state = initialState, action) => {
  if (action.type == MeetingTypes.SET_MEETINGS) {
    return { data: action.data }
  }
  else {
    return state;
  }
}

export const MeetingActions = {
  setMeetings: (meetings) => ({
    type: MeetingTypes.SET_MEETINGS,
    data: meetings
  })
}

export const MeetingTypes = {
  SET_MEETINGS: 'SET_MEETINGS'
};