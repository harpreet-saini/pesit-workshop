var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views/pages/'));

app.get('/bad', function(request, response) {
  response.sendFile(__dirname + '/views/pages/HTMLBadWay.html');
});

app.get('/right', function(request, response) {
  response.sendFile(__dirname + '/views/pages/HTMLRightWay.html');
});

app.get('/robots.txt', function(request, response) {
  response.sendFile(__dirname + '/robots.txt');
});

app.get('/sitemap.xml', function(request, response) {
  response.sendFile(__dirname + '/sitemap.xml');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



