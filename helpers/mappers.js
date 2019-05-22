module.exports = {
  intToBoolean,
  booleanToint,
  userToBody,
  tripToBody // s
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function userToBody(user) {
  const result = {
    ...user,
    professional: intToBoolean(user.professional)
  };

  if (user.trips) {
    result.trips = user.trips.map(trip => ({
      ...trip,
      professional: intToBoolean(trip.professional)
    }));
  }

  return result;
}

function tripToBody(trip) {
  //s
  return {
    ...trip,
    professional: intToBoolean(trip.professional)
  };
}
