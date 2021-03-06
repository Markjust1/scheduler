export function getAppointmentsForDay(state, day) {
  let dayObj = state.days.find((d) => d.name === day);
  if (!dayObj) {
    return [];
  }
  return dayObj.appointments.map(id => state.appointments[id]);
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}

export function getInterviewersForDay(state, day) {
  let dayObj = state.days.find((d) => d.name === day);
  if (!dayObj) {
    return [];
  }
  return dayObj.interviewers.map((id) => state.interviewers[id]);
}