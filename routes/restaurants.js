var express = require("express");
var router  = express.Router();
var mysql = require('mysql');
//intialising connection parameters
var conn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'restaurantsapp'
});
//connecting to mysql db @localhost
conn.connect(function(err,res){
if(err)
	console.log(err.message);
else
    console.log("connected");

});

router.route('/restaurants')
    //retriving all restaurents from the database
   
   .get(function(req, res) {
   	 var queryString = 'SELECT * FROM restaurants';
    //query for data base schema
    conn.query(queryString,function(err, restaurants) {
      if (err){
        res.send(err);
      }//res json for the list of restaurants from server.
      else{
      	
      res.json(restaurants);
      }
    });
  })
//posting a restaurant in DB
   .post(function(req, res) {
  //get data
    var data = {
        
        restaurant_name: req.body.restaurant_name,
        location: req.body.location,
        cuisines: req.body.cuisines,
        price_per_table: req.body.price_per_table,
        no_of_tables: req.body.no_of_tables,
     };

//sql query string
   	 var queryString = 'INSERT INTO restaurants set ? ';
    //query for data base schema
    conn.query(queryString,data,function(err, restaurants) {
      if (err){
        console.log(err);
      }//res json for the list of restaurants from server.
      else{
      	
      res.json(restaurants);
      }
    });
  });
//route for perticular restarurant
router.route('/restaurants/:retaurant_id')  
// getting a restaurant froom the list
    .get(function(req,res){
          var id = req.params.retaurant_id;
          var queryString = 'SELECT * FROM restaurants WHERE retaurant_id = ?';

     conn.query(queryString,[id],function(err,restaurant){
              if(err){
                     console.log(err);
               }else{
                    res.json(restaurant);


              }
          });     
        })

//updating contents of a perticular restaurant
     
     .put(function(req,res){
        var data = {
        retaurant_id: req.body.retaurant_id,
        restaurant_name: req.body.restaurant_name,
        location: req.body.location,
        cuisines: req.body.cuisines,
        price_per_table: req.body.price_per_table,
        no_of_tables: req.body.no_of_tables,
     };    
            var id = req.params.retaurant_id;
            var queryString = "UPDATE restaurants set ? WHERE retaurant_id = ? ";
 
 conn.query(queryString,[data,id],function(err,restaurant){
       
if(err){
console.log(err);

}
else{
console.log(res[0]);
res.json(restaurant);

}
  });
});

///intalising customer search routes

router.route('/search/:key')

    .get(function(req,res){
        
    var searchKey =  req.params.key;
    console.log(searchKey);
     var cuisines = req.params.cuisines;
     var  tables = req.params.no_of_tables;
    


          var queryString = "SELECT restaurant_name,location,cuisines,no_of_tables,price_per_table as type FROM restaurants WHERE restaurant_name LIKE" + SqlString.escape(searchKey) + "OR cuisines LIKE" + 

      SqlString.escape(searchKey) + "OR location LIKE" + SqlString.escape(searchKey) + "OR no_of_tables =" + "?";

conn.query(queryString,[searchKey],function(err,rest,status){
             if(err){
             	console.log(err);
             }else{
              console.log(status);
                 console.log(res.message);
                 res.json(rest);
             }
          });
});


module.exports = router;