//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.
var Person= function(name, age){
	this.name= name;
	this.age= age;
}
  //code here


var Einstien= new Person( "Einstien", 200);
var neilsBohr= new Person("neilsBohr", 180);
var Marx=new Person( "Marx", 120);
//Now create three instances of Person with data you make up

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

 Person.prototype.sayName= function(){
 	alert(this.name);
 } //code here
