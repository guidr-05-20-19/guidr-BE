const db = require("../config/dbConfig");
const mappers = require("./mappers");

module.exports = {
  get: function(id) {
    let query = db("users as u");

    if (id) {
      query.where("u.id", id).first();

      const promises = [query, this.getUserTrips(id)]; // [ users, trips ]

      return Promise.all(promises).then(function(results) {
        let [user, trips] = results;
        user.trips = trips;

        return mappers.userToBody(user);
      });
    }

    return query.then(users => {
      return users.map(user => mappers.userToBody(user));
    });
  },
  getUserTrips: function(userId) {
    return db("trips")
      .where("user_id", userId)
      .then(trips => trips.map(trip => mappers.tripToBody(trip))); //s
  },
  insert: function(user) {
    return db("users")
      .insert(user)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db("users")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db("users")
      .where("id", id)
      .del();
  }
};
