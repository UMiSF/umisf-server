const mongoose = require("mongoose");

const teamRoundSchema = new mongoose.Schema({
  isTeam: {
    type: Boolean,
    default: true,
  },
  groupNumber: {
    type: Number,
  },
  opponentGroupNumber: {
    type: Number,
  },
  nextMatchNumber: {
    type: Number,
  },
  matchNumber: {
    type: Number,
  },
  matchType: {
    type: String,
    required: true,
    enum: ["Men", "Women"],
  },
  teamOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchCategory",
    required: true,
  },
  teamTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchCategory",
    required: true,
  },
  matches : [
    {
      matchType: {
        type: String,
        required: true,
        enum: ["Single", "Double"],
      },
      playerPersonalDetails: [
        {
          name: String,
          photo: String,
          team: {
            type: String,
            enum: ["Team-one","Team-two"]
          }
        },
      ],
      scores: [Number],
      winner: String,
      isFinished: Boolean,
    }
  ], // store all five matches here
  // singleTwo: {
  //   teamOneSingle: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Single",
  //     required: true,
  //   },
  //   teamTwoSingle: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Single",
  //     required: true,
  //   },
  //   result: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "MatchResult",
  //     required: true,
  //   },
  // },
  // singleThree: {
  //   teamOneSingle: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Single",
  //     required: true,
  //   },
  //   teamTwoSingle: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Single",
  //     required: true,
  //   },
  //   result: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "MatchResult",
  //     required: true,
  //   },
  // },
  // doubleOne: {
  //   teamOneDouble: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Double",
  //     required: true,
  //   },
  //   teamTwoDouble: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Double",
  //     required: true,
  //   },
  //   result: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "MatchResult",
  //     required: true,
  //   },
  // },
  // doubleTwo: {
  //   teamOneDouble: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Double",
  //     required: true,
  //   },
  //   teamTwoDouble: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Double",
  //     required: true,
  //   },
  //   result: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "MatchResult",
  //     required: true,
  //   },
  // },
  matchRound: {
    type: String,
    required: true,
    enum: [
      "firstRound",
      "secondRound",
      "thirdRound",
      "fourthRound",
      "preQuaterFinal",
      "quaterFinal",
      "semiFinal",
      "final",
    ],
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matchCategory",
    required: true,
  },
  matchCategory: {
    type: String,
    required: true,
    enum: ["University", "Company"],
  },
  scheduledDate: {
    type: String,
  },
  scheduledTime: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not started", "Sheduled", "Ongoing", "Finished"],
  },
  court: {
    type: String,
  },
  stadium: {
    type: String,
  },
  umpire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
exports.MatchResultCompany = mongoose.model("TeamRound", teamRoundSchema);
