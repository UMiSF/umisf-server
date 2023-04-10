const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({

  year: {
    type: String,
    required: true,
  },
  photos:[
    {
        type:String
    }
  ]
});

module.exports = mongoose.model('Photo', photoSchema);
