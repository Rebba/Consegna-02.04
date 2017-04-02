$( document ).ready(function() {

   $('.mostraltro').on('click', function() {

		var root = 'https://jsonplaceholder.typicode.com';         var root2 = 'https://jsonplaceholder.typicode.com';        
           
	   	var config = {

	   		method: 'GET',

	   		url: root + '/posts',


	  	   	success : function ( posts ) {

	  	   		var source   = $("#caricaqui").html();
				var template = Handlebars.compile(source);
                
	  	   		for (var i = 0; i < 3; i++){

	  	   			var context = posts[i];
					var html    = template(context);
                    

	  	   			$('#fotoqui').append(html);
	  	   		}
                                
	   		},
            
                            
	   		error : function (err) {
	   			alert('Impossible to load posts')
	   		}

	   	}

	   	$.ajax(config)

   });
    
     $('.mostraprofili').on('click', function() {

		var root = 'https://jsonplaceholder.typicode.com';
           
	   	var config = {

	   		method: 'GET',

	   		url: root + '/users',


	  	   	success : function ( users ) {

	  	   		var source   = $("#nomiqui").html();
				var template = Handlebars.compile(source);
                
	  	   		for (var i = 0; i < users.length; i++){

	  	   			var context = users[i];
					var html    = template(context);
                    

	  	   			$('#caricamento').append(html);
	  	   		}
                                
	   		},
            
                            
	   		error : function (err) {
	   			alert('Impossible to load posts')
	   		}

	   	}

	   	$.ajax(config)

   });
    
});