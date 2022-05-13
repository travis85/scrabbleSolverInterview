const functions = require("firebase-functions");
const { ScrabbleMatch } = require("./scrabble");
const express = require('express')

const app = express()

exports.scrabble = app.get(functions.https.onRequest(async(req, res) => {
    const letters = req.query.q
    response = await ScrabbleMatch(letters)
    res.send(response)
  }));
