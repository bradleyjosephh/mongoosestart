const { Schema, model} = require('mongoose')

const Bird = new Schema ({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner',
        required: true
      }
})


module.exports = model('bird', Bird)