const bcrypt = require("bcryptjs");

module.exports = password => {
  const hash = bcrypt.hashSync(password, 14);
  return hash;
};
