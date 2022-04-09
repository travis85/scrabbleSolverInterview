const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const { ScrabbleMatch } = require('./scrabble.js')


app.use(bodyParser.urlencoded())// for endpoints
// app.use(js.scrabbleMatch())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

})
app.get('/scrabble', (req, res) => {
  const letters = req.query.q
  res.send(ScrabbleMatch(letters))
})



app.listen(3000, () => {
  console.log(`Example app listening`)
})

