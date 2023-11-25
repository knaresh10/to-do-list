const {Schema, model} = require('mongoose')


const todoTaskSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = model('TodoTask', todoTaskSchema) 