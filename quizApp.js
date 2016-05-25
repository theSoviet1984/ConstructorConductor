//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

 var QuizUser= function(name, email, password, totalScore){
 	this.name= name;
 	this.email= email;
 	this.password= password;
 	this.totalScore= totalScore;
 }

  //code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  var Question =function(title, answersArray, rightAnswer, difficulty){
  this.title= title;
  this.answersArray= answersArray;
  this.rightAnswer= rightAnswer;
  this.difficulty= difficulty;
  };
  //code here


//Create a quizUsers Array which is going to hold all of our users.

 var quizUsers= []; //code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  var Jerad= new QuizUser("Jerad", "smarterthanyou@yahoo.com","ongoBongo", 100);
  var Muhammad = new QuizUser("Muhammad", "theseer@gmail.com","iforgot", 50);
  var Sinatra= new QuizUser("Sinatra", "stillallive@ny.com","what1ever", 99);//code here
quizUsers.push(Jerad, Muhammad, Sinatra);

//Create a questions Array which is going to hold all of our questions

  var questions=[];//code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
var Inheritance=new Question("Inheritance is achieved in JaveScript through Prototypes",["true", "false"], "true", "easy");//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
var checkType= new Question("JavaScript is just a scripting version of Java", ["true", "false"], "false", "easy");//title: 'T/F: JavaScript is just a scripting version of Java'
var doubleEquals= new Question("In Javascript == doesn't check type but just the value-where===checks type and value", ["true", "false"], "true", "easy");//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here


//Now push all of your instances of Question into the questions Array
questions.push(Inheritance, checkType, doubleEquals);
  //code here

console.log('My users Array and my questions arrray are ...'+ quizUsers+ " " + questions);
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

