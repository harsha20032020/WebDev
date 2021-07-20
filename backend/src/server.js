const express= require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
const RegisterController = require('./controllers/RegisterController');

const PORT = process.env.PORT || 8080;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://harsh:aaaassss1@cluster0.qezzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Success!!")
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send("Hello from dev fml");
})

app.post('/register',RegisterController.store, (req, res) => {
    res.send("Hello from register");
})

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})