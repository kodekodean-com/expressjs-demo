# expressjs-demo

How to use express JS - Handling DELETE Request


delete function

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




dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
