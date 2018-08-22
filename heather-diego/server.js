'use strict';

const getIp = require('get-ip');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware


// INCLUDE A COMMENT to explain why our files are in a "public" directory now and how ExpressJS serves our local files.
app.use(express.urlencoded({ extended: true }),
  express.static('./public')
);

app.get('public/new.html', (request, response) => {
  console.log('cheese');
  res.send()
});

app.post('/articles', (request, response) => {
    // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
    console.log(request.body);
    response.status(201).json(request.body);
    // response.status(404).json(request.body);
  });

app.get('*', function (request, response){
  response.send('Sorry buddy, no stuff here', 404);
});

app.listen(PORT, function() {
  console.log('we are at the listen');
  console.log(getIp());
});
