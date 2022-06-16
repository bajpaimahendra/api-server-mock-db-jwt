
##### Mock API using json-server, jsonwebtoken
  
  Required : Node 16 or above

  	$  git clone https://github.com/bajpaimahendra/api-server-mock-db-jwt.git

	$  npm install
	
	$  npm start  ( npm run dev )

	
  Resources

  	  http://localhost:3000/register

	  http://localhost:3000/login
  
	  http://localhost:3000/products

	  http://localhost:3000/comments

	  http://localhost:3000/users

	  Note : 
	  		1- To protect resources, decleare resources and protected methods in data/protected_resources.json
	  			$  node concat-json.js      ( to concat in DB.js )

	  		2- Change default port, database file, jwt secret or jwt token expires in config.json



### Open Endpoints ( Authentication not required )

##### User Register

	POST 	http://localhost:3000/register

		{
		  "username": "admin",
		  "password": "admin"
		}

	or

		{
		  "email": "admin@gmail.com",
		  "password": "admin"
		}

#### User Login

	POST 	http://localhost:3000/login

		{
		  "username": "admin",
		  "password": "admin"
		}

	or

		{
		  "email": "admin@gmail.com",
		  "password": "admin"
		}

#####  upload single file

		url : http://localhost:3000/upload-file

 		method : POST, 
 		request type : form-data
 		field : file
 		Uploaded file stored in /public/uploads/

##### upload multiple files

		url : http://localhost:3000/upload-files

 		method : POST, 
 		request type : form-data
 		field : files
 		Uploaded file stored in /public/uploads/		

##### Get products
  	GET 	http://localhost:3000/products
  	GET 	http://localhost:3000/products?_sort=name&_order=asc        ( Sorting )
  	GET 	http://localhost:3000/products?_sort=name&_order=desc 	    ( Sorting )

##### Get product by ID
  	GET 	http://localhost:3000/products/3

##### All products with pro in name field
  	GET 	http://localhost:3000/products?name_like=pro   			( Filtering )
  	GET 	http://localhost:3000/products?name=MackBoo Pro&cost=20
  	GET 	http://localhost:3000/products?q=est 				( full text search )

##### product ID != 2	
  	GET 	http://localhost:3000/products?id_ne=2

##### products with rating >= 4 				
  	GET 	http://localhost:3000/products?rating_gte=4

##### Get products including it's comments
  	GET 	http://localhost:3000/products?_embed=comments

##### Get product by ID including it's comments
  	GET 	http://localhost:3000/products/3?_embed=comments


### Private Endpoints ( Authentication required )



##### Add Product
	endpoint 	http://localhost:3000/products
	method      	POST
	request type    application/json
	request body:
 
	{
	"name": "Dell Pro",
	"cost": 200,
	"quantity": 1000,
	"rating": 4.2
	}

##### Update Product
 	endpoint 	http://localhost:3000/products/2
 	method      	PUT
	request type    application/json
	request body:
 
	     {
	      "name": "testing123",
	      "cost": 900,
	      "quantity": "testing123",
	      "rating": 2.3
	    }  

#####  Delete Particular Product
	DELETE 	 http://localhost:3000/products/8


#### User

    Get users: 		GET    / http://localhost:3000/users

    Get user by ID: 	GET   /  http://localhost:3000/users/2

    Create user: 	POST /   http://localhost:3000/users
			{
			   "username": "admin",
			   "password": "admin"
			}
    Update user (entire information):  PUT    / http://localhost:3000/users/7

    Update user (partial information)  PATCH /  http://localhost:3000/users/7

	

###### https://dummyjson.com/
##### https://github.com/robinhuy/fake-rest-api-nodejs


https://blog.logrocket.com/how-to-bootstrap-your-project-with-json-server/

https://www.techiediaries.com/fake-api-jwt-json-server/





https://github.com/robinhuy/fake-rest-api-nodejs


$ node concat-json.js
$ npm start
$ npm run dev
