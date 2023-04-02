const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const api = process.env.API_URL;
const bodyParser = require('body-parser');
const morgan = require('morgan');

//routers

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

/* ROUTES */
const playerRouter = require('./router/playerRouter');
const singleRouter = require('./router/singleRouter');
const universityRouter = require('./router/universityRouter');

app.use('/player', playerRouter);
app.use('/single', singleRouter);
app.use('/university', universityRouter);

app.get(api + '/', (req, res) => {
  res.send('UMiSF API Started');
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE,
  })
  .then(() => {
    console.log('Database connection is ready.');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log('Listening to port number ' + PORT);
});
