const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
});

app.get('/api/posts/:year/:month',(req,res)=>{
    // how to get query of parameter http://localhost:3000/api/posts/2019/2?sortBy=year
    var query_parameter = req.query;
    var get_parameter = req.params;
    res.send(get_parameter);

});

//PORT
const port =  process.env.PORT || 3000;
app.listen (port, () => console.log(`listening port ${port}...`));

