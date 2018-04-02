const express = require('express');
const router = express.Router();
var admin = require('firebase-admin');

router.get('/', function(req, res, next) {

  admin.auth().createUser({
    email: "theazeemullah@gmail.com",
    emailVerified: true,
    phoneNumber: "+11234567890",
    password: "admin123",
    displayName: "John Doe",
    photoURL: "http://www.example.com/12345678/photo.png",
    disabled: false
  })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch(function(error) {
      console.log("Error creating new user:", error);
    });

    res.json({"Status": "Error", "Error": "Request Error. ", "Details": "No data in request body. "});
});

module.exports = router;
