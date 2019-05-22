const dbUser = require("../helpers/users-model");

// users end points
module.exports = server => {
  server.get("/user", getAllUsers);
  server.get("/user/:id", getUser);
  server.post("/user", addUser);
  server.delete("/user/:id", deleteUser);
  server.put("/user/:id", updateUser);
  server.get("/user/:id/trips", getTripsOfUser);
};

// User routes
const getAllUsers = (req, res) => {
  dbUser
    .get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: ` Failed to get all Users`, error: err });
    });
};

const getUser = (req, res) => {
  dbUser
    .get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to get User`, error: err });
    });
};

const addUser = (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    res
      .status(400)
      .json({ message: "username and password for the user is required." });
    return;
  }

  dbUser
    .insert(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed add user", error: err });
    });
};

const deleteUser = (req, res) => {
  dbUser
    .remove(req.params.id)
    .then(userDeleted => {
      if (userDeleted > 0) {
        res.status(200).json(userDeleted);
      } else {
        res
          .status(404)
          .json({
            message: `The User with the specified ID does not exist`,
            userDeleted
          });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to delete User`, error: err });
    });
};

const updateUser = (req, res) => {
  if (req.params.id === undefined) {
    res
      .status(400)
      .json({
        errorMessage: "username and password are required for the user."
      });
    return;
  }
  dbUser
    .update(req.params.id, req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Internal server error. Could not update User`,
          error: err
        });
    });
};

const getTripsOfUser = (req, res) => {
  const { id } = req.params;
  dbUser
    .getUserTrips(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Could not find the trips of the user with ${id}`,
          error: err
        });
    });
};
