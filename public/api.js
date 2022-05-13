const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
// const url = require('url');
const { ScrabbleMatch } = require('../functions/scrabble.js');


app.use(bodyParser.urlencoded({extended: true}))// for endpoints
// app.use(js.scrabbleMatch())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/sowpods',(req, res)=>{
  res.sendFile(path.join(__dirname, './sowpods.txt'));

})

app.get('/scrabble', async (req, res) => {

  const letters = req.query.q
  response = await ScrabbleMatch(letters)
  res.send(response)
});


app.listen('3000', () => {
  console.log(`Example app listening`)
})

