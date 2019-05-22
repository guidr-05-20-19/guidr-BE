# Guidr App

# Team members

* UX: Troy Schennum
* UI: Damola Adewunmi & George Kando
* FE: Azra Panjwani & Hung Pham
* BE: Tristan Grovender
* TL: John O'Rourke

# About

# API Endpoints

* Admin routes
* POST https://tristan-guidr.herokuapp.com/register = Registers a user
* POST https://tristan-guidr.herokuapp.com/login = Login for user
* requires a user object:
```
`username` (string),
`password` (string)
```
* Trip Routes
* POST https://tristan-guidr.herokuapp.com/trips = Adds new trip
* Post object with shape of:
```
`id` (number),
`user_id` (number),
`adventure_type` (string),
`title` (string),
`location` (string),
`duration` (string),
`description` (string),
`professional` (boolean),
`date` (string)
```
* GET https://tristan-guidr.herokuapp.com/trips = Get all trips
* returns an array with shape of:
```
`id` (number),
`user_id` (number),
`adventure_type` (string),
`title` (string),
`location` (string),
`duration` (string),
`description` (string),
`professional` (boolean),
`date` (string)
```
* GET https://tristan-guidr.herokuapp.com/trips/:id = Get specific trip by ID
* returns an array with shape of:
```
`id` (number),
`user_id` (number),
`adventure_type` (string),
`title` (string),
`location` (string),
`duration` (string),
`description` (string),
`professional` (boolean),
`date` (string)
```
* PUT https://tristan-guidr.herokuapp.com/trips/:id = Updates a specific trip by ID
* DELETE https://tristan-guidr.herokuapp.com/trips/:id = Deletes a specific trip by ID
* User Routes
* POST https://tristan-guidr.herokuapp.com/user = Adds a new user
* GET https://tristan-guidr.herokuapp.com/user = Gets all users
* returns an array with shape of:
```
`id` (string),
`username` (string),
`name` (string),
`email` (string),
`location` (string),
`bio` (string),
`professional` (boolean)
```
* GET https://tristan-guidr.herokuapp.com/user/:id = Gets specific user by ID
* returns an array with shape of:
```
`id` (string),
`username` (string),
`name` (string),
`email` (string),
`location` (string),
`bio` (string),
`professional` (boolean)
```
GET https://tristan-guidr.herokuapp.com/user/:id/trips = Gets all trips from a specific user by ID
* returns an array with shape of:
```
`id` (number),
`user_id` (number),
`adventure_type` (string),
`title` (string),
`location` (string),
`duration` (string),
`description` (string),
`professional` (boolean),
`date` (string)
```
* PUT https://tristan-guidr.herokuapp.com/user/:id = Updates a specific user by ID
* DELETE https://tristan-guidr.herokuapp.com/user/:id = Deletes a specific user by ID

