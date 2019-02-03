const Joi = require('joi');
const express = require('express');
const router = express.Router();
const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];


router.get('/',(req,res)=>{
    res.send(courses);
});


router.post('/',(req,res)=>{


    // if(!req.body.name || req.body.name.length < 3){
    //     //400 Bad request

    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return;
    // }
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    

    const course = {
        id:courses.length + 1,
        name:req.body.name
    };

    courses.push(course);
    return res.send(course);
});


router.put('/:id',(req,res)=>{
    //Lookup the course
    // if not existing, return 404
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('ID not Found') ;

    //validate0
    //if invalid, return 400 - Bad Request
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
 
    // update course 
    // return updated course
    course.name = req.body.name;
    return res.send(course);
});

function validateCourse(course){

    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);


}

router.get('/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.status(200).send(course);
    }else{

        res.status(404).send('ID not Found');

    }
    
});

router.delete('/:id',( req, res) => {
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


module.exports = router;