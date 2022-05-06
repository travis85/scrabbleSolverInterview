const functions = require("firebase-functions");
const admin = require('firebase-admin');

const express = require("express")
const bodyParser = require("body-parser");
const path = require("path");
const app = express()
const { ScrabbleMatch } = require("../public/scrabble.js")
const cors = require("cors")

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.scrabble = functions.https.onRequest((req, res) => {
  const letters = req.query.q
  res.send(ScrabbleMatch(letters))
})



// app.listen('scabblewords.web.app/', () => {
//   console.log(`Example app listening`)
// })
//exports.scrabble = functions.https.onRequest((req, res) => {
//   const letters = req.query.q
//   ...
// })
