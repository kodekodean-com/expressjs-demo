# expressjs-demo

How to use express JS -Handling POST Request

add first :
app.use(express.json()); // middleware for reprosing in pipeline

create code 

app.post('/api/courses',(req,res)=>{
    const course = {
        id:courses.length + 1,
        name:req.body.name
    };

    courses.push(course); // adding obejecct to array.
    res.send(course);
});

dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
