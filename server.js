const express     = require('express'),
      dbOperation = require('./data/dbOperation'),
      cors        = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// app.get('/start', function(req, res) {
//   console.log('Called');
//   res.send({result: 'Hello!'});
// })

// app.get('/end', function(req, res) {
//   console.log('Exited');
//   res.send({result: 'Goodbye!'});
// })

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

dbOperation.getTasks().then(res => {
  console.log(res);
})