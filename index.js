const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');

const logger = require('./middleware/logger');
const auth = require('./auth');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
app.set('view engine','pug');

//Middleware Section
app.use(express.json()); // middleware for reprosing in pipeline
app.use(express.urlencoded({extended:true})); //key=value&key=value
app.use(express.static('public')); // public on url infolder public
app.use('/api/courses',courses);
app.use('/',home);

//Configuration
console.log('Application Name   : '+ config.get("name"));
console.log('Mail Server        : '+ config.get("mail.host"));
console.log('Mail Password      : '+ config.get("mail.password"));

// app.use(auth);
app.use(helmet());
app.use(logger);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled.....');
}

//db work
dbDebugger('Connected to the database');


//PORT
const port =  process.env.PORT || 3000;
app.listen (port, () => console.log(`listening port ${port}...`));

