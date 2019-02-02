# expressjs-demo

How  to use express JS - Route Parameter

app.get('/api/posts/:year/:month',(req,res)=>{
    // how to get query of parameter http://localhost:3000/api/posts/2019/2?sortBy=year
    var query_parameter = req.query;
    var get_parameter = req.params;
    res.send(get_parameter);

});

var query_parameter = req.query;
var get_parameter = req.params;

you can set response with both of those parameter.

if you want get specific parameter using req.params

add the attribute on the end of string, like this:

req.params.year

or

req.params.month




Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
