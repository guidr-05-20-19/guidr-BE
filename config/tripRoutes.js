const dbTrips = require("../helpers/tripModel");

// trips end points
module.exports = server => {
  server.get("/trips", getAllTrips);
  server.get("/trips/:id", getTripsById);
  server.post("/trips", addNewTrip);
  server.delete("/trips/:id", deleteTrip);
  server.put("/trips/:id", updateTrip);
};

// Trip routes

const getAllTrips = (req, res) => {
  dbTrips
    .get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Trips.", error: err });
    });
};

const getTripsById = (req, res) => {
  dbTrips
    .get(req.params.id)
    .then(post => {
      console.log(post);
      if (post.length !== 0) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({
            message: `Failed to get Trip with specific ID: ${
              req.params.id
            } does not exist`
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `The Trip with id: ${req.params.id} could not be retrieved.`,
          error: err
        });
    });
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const recordsDeleted = await dbTrips.remove(id);
    if (recordsDeleted > 0) {
      res.status(200).json(recordsDeleted);
    } else {
      res
        .status(404)
        .json({ message: `Failed to delete Trip, Trip does not exist` });
    }
  } catch (err) {
    res.status(500).json({ message: "The Trip could not be removed", err });
  }
};

const addNewTrip = (req, res) => {
  dbTrips
    .insert(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save Trip", error: err });
    });
};

const updateTrip = (req, res) => {
  if (
    req.params.id === undefined ||
    req.body.trip_type === undefined ||
    req.body.location === undefined
  ) {
    res
      .status(400)
      .json({
        errorMessage: "Trip type and location are for the Trip are required."
      });
    return;
  }
  dbTrips
    .update(req.params.id, req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Internal server error. Could not update Action`,
          error: err
        });
    });
};
