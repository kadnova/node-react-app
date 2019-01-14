import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.json'

const mongoDB = `mongodb://${config.db.host}/${config.db.name}`;

// get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});

// initialization of express application
const app = express();

//__dirname will resolve to project folder
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

// handles not found errors
app.use((err, req, res, next) => {
    if (err.httpStatusCode === 404) {
        res.status(400).render('NotFound');
    }
    next(err);
});

// catch all
app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) {
        res.status(err.httpStatusCode || 500).render('UnknownError');
    }
});

app.listen(config.serverPort, () => {
    console.log(`Server is up and running on port 8080`);
});
