# expressjs-demo

How to use express JS - Middleware 


first you need to create folder 'logger.js' on you root folder.

and then paste this code:

function log(req,res,next){
    console.log('Logging...');
    next();
}

module.exports = log


and add this code to the top of your code on 'index.js'

const logger = require('./logger');

find code blow:
app.use(express.json());

add this code under the code you find before:
app.use(logger); // basiccally this is a middleware.

you can check the result on your bash while you run 'nodemon index.js' it will recorded on bash.



dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
