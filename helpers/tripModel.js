const db = require("../config/dbConfig");
const mappers = require("./mappers");

module.exports = {
  get: function(id) {
    let query = db("trips");

    if (id) {
      return query
        .where("id", id)
        .first()
        .then(trip => mappers.tripToBody(trip)); // s
    }

    return query.then(trips => {
      return trips.map(trip => mappers.tripToBody(trip)); //s
    });
  },
  insert: function(trip) {
    return db("trips")
      .insert(trip)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db("trips")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db("trips")
      .where("id", id)
      .del();
  }
};
