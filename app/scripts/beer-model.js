var Beer = Parse.Object.extend("Beer");

var BeersCollection = Parse.Collection.extend({
	model: Beer
});