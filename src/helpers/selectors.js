export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const filteredDays = state.days.find((elem) => {
    if (elem.name === day) {
      return elem;
    }
  });
  if (filteredDays === undefined) {
    return [];
  }
  const filteredApps = filteredDays.appointments.map((item) => {
    return state.appointments[item];
  });
  return filteredApps;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return {...interview, interviewer};
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const filteredDays = state.days.find((elem) => {
    if (elem.name === day) {
      return elem;
    }
  });
  if (filteredDays === undefined) {
    return [];
  }
  const filteredApps = filteredDays.interviewers.map((item) => {
    return state.interviewers[item];
  });
  return filteredApps;
}
