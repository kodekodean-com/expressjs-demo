# expressjs-demo

How to use express JS -Handling Get Request

array of courses

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'}
]; 

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id)); // why use const? because i dont want change it.
    if(course){
        res.status(200).send(course); // return 200
    }else{

        res.status(404).send('ID not Found'); //return 404

    }
    
});




Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
