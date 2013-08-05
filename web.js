var express = require('express');
var app = express();
var htmlfile = "index.html";
app.use(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 9080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
