const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json()); // middleware for reprosing in pipeline

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


    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body,schema);
    
    console.log(result);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }else{
        res.status(200).send(result.value);
        return
    }


    const course = {
        id:courses.length + 1,
        name:req.body.name
    };

    courses.push(course);
    res.send(course);
});



app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.status(200).send(course);
    }else{

        res.status(404).send('ID not Found');

    }
    
});


//PORT
const port =  process.env.PORT || 3000;
app.listen (port, () => console.log(`listening port ${port}...`));

