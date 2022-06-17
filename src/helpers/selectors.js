export function getAppointmentsForDay(state, day) {

  if (state.days.length === 0) {
    return [];
  }

  const filteredDays = state.days.find(elem => {

    if (elem.name === day) {
      return elem;
    }
  })

  if (filteredDays === undefined) {
    return [];
  }

  const filteredApps = filteredDays.appointments.map((item) => {
    return state.appointments[item];
  })

  return filteredApps;
} 