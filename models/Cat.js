const { Schema, model} = require('mongoose')

const Cat = new Schema ({
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
    color: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner',
        required: true
      }
})


module.exports = model('cat', Cat)

