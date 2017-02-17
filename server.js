var express = require('express');
var app = express();
var validator = require('validator');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./models/db.js');
var request = require('superagent');

const PORT = process.env.PORT || 3000;

// mailchimp credentials
var mc_apiKey = process.env.MAILCHIMP_API_KEY || '';
var mc_listId = process.env.LIST_ID || '';

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// POST /newusers
app.post('/newusers', function(req, res) {
  var body = _.pick(req.body, 'email', 'zipcode', 'entrycode');
  var newuser = {
    email_address: body.email,
    status: 'subscribed',
    merge_fields: {
      ZIPCODE: body.zipcode,
      REFSOURCE: body.entrycode
    }
  };

  // // store to a database
  // db.user.create(body).then(function(user) {
  //   if (mc_apiKey.length > 0) {
  //     // post to mailchimp
  //     request
  //       .post('https://us12.api.mailchimp.com/3.0/lists/' + mc_listId + '/members/')
  //       .set('Content-Type', 'application/json;charset=utf-8')
  //       .set('Authorization', 'Basic ' + new Buffer('any:' + mc_apiKey ).toString('base64'))
  //       .send(newuser)
  //       .end(function(err, response) {
  //         if (response.status < 300 || (response.status === 400 && response.body.title === 'Member Exists')) {
  //           res.send('Signed Up!');
  //         } else {
  //           res.send('Failed to sign up!');
  //         }
  //       });
  //   }
  // }, function(error) {
  //   res.status(400).json(error);
  // });

});

db.sequelize.sync({logging: console.log}).then(function() {
  app.listen(PORT, function() {
    console.log("SERVER IS UP ON PORT " + PORT)
  });
});
