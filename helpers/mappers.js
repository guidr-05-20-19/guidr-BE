module.exports = {
  intToBoolean,
  booleanToint,
  userToBody,
  adventureToBody // s
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

  if (user.adventures) {
    result.adventures = user.adventures.map(adventure => ({
      ...adventure,
      professional: intToBoolean(adventure.professional)
    }));
  }

  return result;
}

function adventureToBody(adventure) {
  //s
  return {
    ...adventure,
    professional: intToBoolean(adventure.professional)
  };
}
