/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/
var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.
var users= [];
  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order
var Tyler=new User("Tyler", "tylermcginnis33@gmail.com","iLoveJS");
 var Cahlan= new User("Cahlan", "cahlan@devmounta.in" , "iLoveHashtags");
 var Lenny=new User("Lenny", "lessy@theLenster.com", "iLoveLentilSoup"); //code here
users.push(Tyler, Lenny, Cahlan);
//Console.log all of Tylers information
console.log('Tyler\'s information is '+users[0].name+' '+users[0].email+' '+users[0].pw);


  //code here


//Now console.log all of Lennys information
console.log('Lenny\'s information is '+users[0].name+ ' '+users[0].email+' '+users[0].pw);
  
  //code here


//Now create another instance of User using your own information and then add that to your users array.

  var Jerad= new User("Jerad", "smarterthanyou@gmail.com", "SpiralNebula");//code here
users.push(Jerad);
//Now loop through your users Array and console.log every users name. 

  
  for(var i=0; i<=users.length; i++){
    console.log('All my users names are '+ users[i].name);
    }//code here
