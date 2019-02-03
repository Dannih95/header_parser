// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
/**app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});**/

// HTML engine set up for variable passing to the html file
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// API endpoint for the fullstack project
app.get("/", function(req, res) {
  let response = {};
  response.ipaddress = req.ip;
  response.language = req.get("Accept-Language");
  response.software = req.get("User-Agent");
  res.render(__dirname + "/views/index.html", {name: JSON.stringify(response)});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
