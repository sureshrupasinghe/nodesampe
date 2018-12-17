var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    response.send('Wercker + Heroku + Node + Tenable Sample Application + 2018');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
