const express = require('express')
const mongoose = require('mongoose')

const app = express()
const TodoTask = require('./models/TodoTask')

app.set("useFindAndModify", false)
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use('/static', express.static('public'))


app.get('/', async (req, res) => {
    const tasks = await TodoTask.find({})
    res.render('todo', { todoTasks: tasks})
})

app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    })
    try {
        await todoTask.save();
        res.redirect('/')
    } catch (err) {
        res.redirect('/')
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/to-do').then((e) => {
    console.log('MongoDB connected')
    app.listen(3000, () => {
        console.log('Server Up and running')
    })
})
