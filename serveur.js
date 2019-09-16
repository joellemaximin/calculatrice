var express = require('express');
var app = express();

const port = process.env.PORT || 5000;

app.get('/add', (req,res)=>{

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const result = a + b;   

    res.type('json');
    res.send(String(result));

});

// var additionner = {
//     function(a,b){
//         return a + b
//     }
// }

app.listen(port, ()=> console.log('listenning on port ${port}'))