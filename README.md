	$ npm install -g json-server          		( install package globaly )
	$ json-server -v  				( check version )
	$ json-server -h  				( help )
	
	$ git clone https://github.com/bajpaimahendra/json-server-mock-api.git
	
	$ cd json-server-mock-api
	
	$ npm install					( install dependency from package.json )
	
	$ node concat-json.js 				( run js file , To concat multiple json file into single json file)
	
	$ json-server --watch data/DB.json


##### Making GET Requests

  Resources
  
	  http://localhost:3000/products

	  http://localhost:3000/comments

	  http://localhost:3000/users

##### Get products
  	GET 	http://localhost:3000/products
  	GET 	http://localhost:3000/products?_sort=name&_order=asc        ( Sorting )
  	GET 	http://localhost:3000/products?_sort=name&_order=desc 		( Sorting )

##### Get product by ID
  	GET 	http://localhost:3000/products/3

##### All products with pro in name field
  	GET 	http://localhost:3000/products?name_like=pro   				( Filtering )
  	GET 	http://localhost:3000/products?name=MackBoo Pro&cost=20
  	GET 	http://localhost:3000/products?q=est 						( full text search )

##### product ID != 2	
  	GET 	http://localhost:3000/products?id_ne=2

##### products with rating >= 100 				
  	GET 	http://localhost:3000/products?rating_gte=4

##### Get products including it's comments
  	GET 	http://localhost:3000/products?_embed=comments

##### Get product by ID including it's comments
  	GET 	http://localhost:3000/products/3?_embed=comments 

##### Add Product
	POST 	http://localhost:3000/products
 
	{
	"id": 7,
	"name": "Dell Pro",
	"cost": 200,
	"quantity": 1000,
	"rating": 4.2
	}

##### Update Product
 	PUT 	http://localhost:3000/products/2
 
	     {
	      "name": "testing123",
	      "cost": "testing123",
	      "quantity": "testing123",
	      "rating": 2.3
	    }  

#####  Delete Particular Product
	DELETE 	 http://localhost:3000/products/8

###### https://dummyjson.com/
##### https://github.com/robinhuy/fake-rest-api-nodejs


https://blog.logrocket.com/how-to-bootstrap-your-project-with-json-server/

https://www.techiediaries.com/fake-api-jwt-json-server/





https://github.com/robinhuy/fake-rest-api-nodejs


$ node concat-json.js
$ npm start
$ npm run dev