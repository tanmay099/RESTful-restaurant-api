// sample tables bookschema

// conn.query('CREATE TABLE tables_book ('
//       +' booking_id int(10) PRIMARY KEY AUTO_INCREMENT,'
//       +' retaurant_id int(11) NOT NULL,'
//       +' customer_id int(11) NOT NULL,'
//       +' table_booked int(10) NOT NULL DEFAULT 0,'
//       +' remain int(10),'
//       +' total_price decimal(10) NOT NULL DEFAULT 0,' 
//       +' location varchar(20) NOT NULL,'
//       +' cuisines varchar(20),'
//       +' discount decimal(10,2) NOT NULL DEFAULT 0.0,'
//       +' FOREIGN KEY (retaurant_id) REFERENCES restaurants(retaurant_id),'
//       +' FOREIGN KEY (customer_id) REFERENCES customers(customer_id)' 
// +' )',function(err , response){
// if(err)
// 	console.log(err.message);
// else
// console.log(response);
// });

// conn.query('insert into tables_book (booking_id,retaurant_id,customer_id,table_booked,remain,total_price,location,cuisines,discount) values(1,1,1,1,9,50.0,"Banglore","india,south",0.0)',function(err,response){
// if(err)
// 	console.log(err.message);
// else
// 	console.log(response);

// });