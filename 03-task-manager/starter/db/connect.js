const mongoose = require('mongoose')

const connectString = 'mongodb+srv://anniethewebcoder:KrERNzFxEzOha3qu@clusters.dbphh7w.mongodb.net/?retryWrites=true&w=majority&appName=Clusters'

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('CONNECTED TO THE DB')
}).catch((err) => {
    console.log(err)
})