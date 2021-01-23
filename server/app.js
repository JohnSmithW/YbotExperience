const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const accountSid = 'AC874eb2fb629603cbde22a59688e83944';
// const authToken = 'a9721016b6cef6b1db688824326ec36a';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({ body: 'Hi there!', from: '+61488880798', to: '+61404840309' })
//   .then((message) => console.log(message.sid));

const port = process.env.PORT || 8080;

let info = null;

app.post('/info', (req, res) => {
  info = {
    name: req.body.name,
    lastName: req.body.lastName,
    organization: req.body.organization,
    details: req.body.details,
  };

  console.log(info);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
