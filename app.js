var express = require('express');
var app  =  express();
var PORT = 3000;

//starting and listening to server port
app.listen(PORT,function(res){
console.log('Server is runnoig on port ' + PORT);
});
