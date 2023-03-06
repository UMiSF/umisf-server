const mongoose = require("mongoose");

const tournementSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  pictures: [
    {
      description: {
        type: String,
      },
      picture: {
        type: String,
        required: true,
      },
    },
  ],
  flyers: [
    {
      description: {
        type: String,
      },
      flyer: {
        type: String,
        required: true,
      },
    },
  ],
  subTournaments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTournament",
      required: true,
    },
  ],
  tShirtFront: {
    type: String,
    required: true,
  },
  tShirtBack: {
    type: String,
    required: true,
  },
  startingDate: {
    type: Date,
    required: true,
  },
  finishingDate: {
    type: Date,
  },
  description: {
    type: String,
  },
});

exports.Tournement = mongoose.model("Tournement", tournementSchema);
