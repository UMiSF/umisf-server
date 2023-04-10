const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");

//routers

//middleware
app.use(morgan("tiny"));
app.use(express.json({limit: "20mb", extended: true}));
app.use(cors());
app.options("*", cors());
app.use(express.static("public"));
app.use(bodyParser.json());



const PORT = process.env.PORT || 3001;

/* ROUTES */
const doubleRouter = require('./router/doubleRouter');
const companyRouter = require('./router/companyRouter');
const playerRouter = require('./router/playerRouter');
const singleRouter = require('./router/singleRouter');
const universityRouter = require('./router/universityRouter');
const feedbackRouter = require('./router/feedbackRouter');
const userRouter = require('./router/userRouter');
const photoRouter = require('./router/photoRouter')
const imageUploadRouter = require('./router/imageUploadRouter');

app.use('/double', doubleRouter);
app.use('/company', companyRouter);
app.use('/player', playerRouter);
app.use('/single', singleRouter);
app.use('/university', universityRouter);
app.use('/feedbacks', feedbackRouter);
app.use('/user', userRouter);
//app.use('/photo',photoRouter);;
app.use('/image', imageUploadRouter);

app.get(api + "/", (req, res) => {
  res.send("UMiSF API Started");
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE,
  })
  .then(() => {
    console.log("Database connection is ready.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Listening to port number " + PORT);
});
