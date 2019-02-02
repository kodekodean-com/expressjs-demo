const Joi = require('joi');
const logger = require('./logger');
const auth = require('./auth');

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

//Middleware Section
app.use(express.json()); // middleware for reprosing in pipeline
app.use(express.urlencoded({extended:true})); //key=value&key=value
app.use(express.static('public')); // public on url infolder public
app.use(logger);
// app.use(auth);
app.use(helmet());
app.use(morgan('tiny'));

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'}
];

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});


app.post('/api/courses',(req,res)=>{


    // if(!req.body.name || req.body.name.length < 3){
    //     //400 Bad request

    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return;
    // }
    const { error } = validateCourse(req.body);
    if(error) res.status(400).send(error.details[0].message); return;
    

    const course = {
        id:courses.length + 1,
        name:req.body.name
    };

    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id',(req,res)=>{
    //Lookup the course
    // if not existing, return 404
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('ID not Found'); return;

    //validate0
    //if invalid, return 400 - Bad Request

    const { error } = validateCourse(req.body);
    
    if(error) res.status(400).send(error.details[0].message); return;

    // update course 
    // return updated course
    course.name = req.body.name;
    res.send(course);
});


function validateCourse(course){

    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);


}





app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.status(200).send(course);
    }else{

        res.status(404).send('ID not Found');

    }
    
});

app.delete('/api/courses/:id',( req, res) => {
 // Look up the course
 //Not existing, return 404
 const course = courses.find(c => c.id === parseInt(req.params.id));
 if(!course) return res.status(404).send('ID not Found'); 

 //delete
 const index = courses.indexOf(course);
 courses.splice(index,1);

 //return the same course
 res.send(course);

});


//PORT
const port =  process.env.PORT || 3000;
app.listen (port, () => console.log(`listening port ${port}...`));

