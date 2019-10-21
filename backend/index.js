const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

// Setup express app
const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//listen for requests
app.listen(process.env.port || 5000, function(){
	console.log('now listening for requests on port 5000');
});