const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/user1',  { useMongoClient: true });
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || 3000, function(){
    console.log('Using PORT 3000');
});