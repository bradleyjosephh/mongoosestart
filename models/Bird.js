const { Schema, model} = require('mongoose')

const BirdSchema = new Schema ({
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
    }
})


const Bird = model('bird', BirdSchema)

modules.export = Bird