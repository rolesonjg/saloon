const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://rolesonbookstore:tennisbat@cluster0.ndqpz8q.mongodb.net/?retryWrites=true&w=majority", {
    dbName: 'saloon'
})
    .then(() => {
        console.log('MongoDB connected Successfully')
    })
    .catch(error => {
        console.log('MongoDB coneection is not available' + error)
    })
    