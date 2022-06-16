	var jsonConcat = require('json-concat');
	jsonConcat({
	    //src: "data",
	    src: ["data/protected_resources.json", "data/products.json", "data/comments.json", "data/users.json"],
	    dest: "./data/DB.json",
	}, function(json){
	    console.log(json);
	});

	console.log('jmd.....');