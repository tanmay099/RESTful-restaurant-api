var express = require('express'),
    mysql = require('mysql'),
    app  =  express(),
    PORT = 3000,
    bodyParser = require('body-parser'),
    SqlString = require('sqlstring')
   



//requiring routes
var restaurantsRoutes = require("./routes/restaurants");
var bookingRoutes = require("./routes/booking");


app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
// prevent errors from Cross Origin Resource Sharing, 
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//intialinsing the api router.
var router = express.Router();

//intialising the API
router.get('/',function(req,res){
res.json({message: 'API Initialized'});

});

//using routes models
app.use('/api',router);
app.use("/api", restaurantsRoutes);
app.use("/api", bookingRoutes);



//starting and listening to server port
app.listen(PORT,function(res){
console.log('Server is runnoig on port ' + PORT);
});
