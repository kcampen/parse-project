console.log('and the crowd goes wild');

$(function(){
Parse.initialize("hH5LWqmF6zC2EXEWDeSnBr5u6fiOWqW9Ix4il3lj", "Ygiy26c6Zjn4JXPeZQnccP8MrOZDlIFp6f0q6MHg");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });



// saves all this info on the click of modal-btn
$('.modal-save-btn').click(function(){

	var user = new Parse.User();

	var firstname = $('.js-username').val();
	var password = $('.js-password').val();
	var emailData = $('.js-email').val();

	user.set('username', firstname);
	user.set('password', password);
	user.set('email', emailData);

	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

});

// trying to grab input text here
window.inputs = new InputCollection();
$('.js-input-btn').click(function(){

	var input = new Parse.Input();
	$('.js-input-text').val();

})


});