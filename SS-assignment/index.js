const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./dbconfig.js');
const routes = require('./routes/routes');
const app = express();
const path = require('path');


app.use(express.json());
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})

mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

//app.use(basicAuth)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/workout', routes);