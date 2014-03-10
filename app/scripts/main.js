console.log('and the crowd goes wild');

$(function(){
Parse.initialize("hH5LWqmF6zC2EXEWDeSnBr5u6fiOWqW9Ix4il3lj", "Ygiy26c6Zjn4JXPeZQnccP8MrOZDlIFp6f0q6MHg");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});


});