# expressjs-demo

How to use express JS - Input Validation

using joi from npm to validate input.

write this on your bash : npm i joi 


traditional validation:
 if(!req.body.name || req.body.name.length < 3){
        //400 Bad request

        res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }


with Joi Validation:

const schema ={
        name: Joi.string().min(3).required();
    }

const result = Joi.validate(req.body,schema);



dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
