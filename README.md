# expressjs-demo

How to use express JS - Templating Engines
Hi now i will show u how to use templating engine.

-first you nit to install to 'npm i pug'

-then create folder 'views' on the root of folder

-after that you can add this code to index.js on the root of folder:
app.set('view engine','pug');

-change respond from route like this:
app.get('/',(req,res)=>{
    res.render('index',{'title':'My Express JS', 'message':'Hello'});
});

-create file 'index.pug' on views folder and write down this html code
html
    head    
        title=title
    body
        h1=message

-done



dont forget use service for hit http POST.

me using POSTMAN :)

you can download here:
https://www.getpostman.com/



Please do "npm install" before you run my code.

run "nodemon index.js"

www.kodekodean.com
