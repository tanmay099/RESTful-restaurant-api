var express = require("express");
var router  = express.Router();
var mysql = require('mysql');
var conn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'restaurantsapp'
});

conn.connect(function(err,res){
if(err)
	console.log(err.message);
else
    console.log("connected");

});


//initalising the booking route

router.route('/booking/:customer_id')

// booking a table
     .post(function(req,res){
    var data = {
        time_from: new Date("2017-03-25T12:00:00Z"),
        time_to: new Date("2017-03-25T12:30:00Z"),
        retaurant_id: req.body.retaurant_id,
        customer_id: req.params.customer_id,
        location: req.body.location,
        cuisines: req.body.cuisines,
        total_price: req.body.total_price,
       
        table_booked: req.body.table_booked,
        discount: req.body.discount
     };  

      var queryString = "INSERT INTO tables_book set ?"
     
conn.query(queryString,[data],function(err,details){
           
           if(err){
            console.log(err);
           }
           else{
            res.json(details);
           }


});

     })

//deleting a booked table from databases
     .delete(function(req,res){
      var customer_id = req.params.customer_id;

      var queryString = "DELETE FROM tables_book WHERE customer_id = ?"

      conn.query(queryString,[customer_id],function(err,status){
           
           if(err){

            console.log(err);
           }else {

            res.json(status);
           }
});

  })





module.exports = router;