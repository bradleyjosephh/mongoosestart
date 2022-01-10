const { Schema, model} = require('mongoose')

const CatSchema = new Schema ({
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
    }
})


const Cat = model('cat', CatSchema)

modules.export = Cat