let express = require('express');
let mongoose = require('mongoose');
let config = require('./config/config.json');
const path = require('path');

const mongoDB = `mongodb://${config.db.host}/${config.db.name}`;

// get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, function(err, db) {
    // assert.equal(null, err);
    console.log("Connected correctly to server");

    if (err) throw error
});

// initialization of express application
const app = express();

const server = express.Router();
const article = require('./routes/article.route');

app.use(express.static(path.join(__dirname, '../dist')))
app.use('/server', server);
server.use('/article', article);

// a middleware function with no mount path. This code is executed for every request to the router
server.use(function (req, res, next) {
    console.log('Time:', Date.now());
    res.json({
        time: Date.now()
    });
    next();
});

//__dirname will resolve to project folder
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});
 
app.use(function (err, req, res, next) {
    res.status(500).json({error: err.message})
});


app.listen(config.serverPort, () => {
    console.log(`Server is up and running on port ${config.serverPort}`);
});
