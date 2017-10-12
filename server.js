// Import variables from .env file
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise

//Create a new app using express 
const app = express()

//Connect to MongoDB and set up messages for when
// Mongo connects succesffuly or errors out
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})
// If the connection throws an error
connection.on('error', (err) => {
    console.log('MongoDB error: ', err);
  }) 

//Inject middleware
app.use(bodyParser.json());

//Index
app.get('/', (req,res) => {
  res.send('Hello world!')
})


//Set the app to listen on a specific port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("App listening on port: ", PORT)
})