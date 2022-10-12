var express = require('express');
var router = express.Router();

/* GET home page. */

app.use("/public", express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/assets/html/main.html'))})

module.exports = router;
