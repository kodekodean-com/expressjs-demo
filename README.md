# expressjs-demo

How to use express JS - Handling PUT Request

this function for update course data using put 

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

validation course function for validate data before go to next process.

function validateCourse(course){

    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);


}




dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
