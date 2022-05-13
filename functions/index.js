const functions = require("firebase-functions");
const { ScrabbleMatch } = require("./scrabble");
const axios = require('axios');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.scrabble = functions.https.onRequest(async(req, res) => {
    const letters = req.query.q
    response = await ScrabbleMatch(letters)
    res.send(response)
});
