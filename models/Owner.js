const { Schema, model } = require('mongoose')

const Owner = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cats: [{
    type: Schema.Types.ObjectId,
    ref: 'cat'
  }],
  birds: [{
    type: Schema.Types.ObjectId,
    ref: 'bird'
  }]
})

module.exports = model('owner', Owner)
