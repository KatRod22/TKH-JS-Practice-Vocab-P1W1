//Complete the instructions for each numbered problem. Each numbered problem is worth 10 points

//1. data types built-in methods, variables
     var a = 'Hello World';
     var b = 25;
     var isWorking = 'True';
     var a;
     var b = null;
     var person = {"name": "Katherine" , "age": "24"};
     var animals = ["Dog", "Horse", "Sheep"];
     var greeting = function(){}
     
     

      
//a. define a variable and give it a string value
      var k = 'Am I doing this right?!'

//b. define a variable and give it a number value
      var a = 22

//c. define a variable and give it a boolean value
      var isSleeping = false;

//2. if else, ternary
      let year = prompt('What year are we in?')
      if (year == 2022) alert('You are correct!')

//a. define a variable 'metrocard' and give it a value of 5
      Var metrocard = 5;

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
    if (metrocard > 2.75) {
  alert = "you have enought to ride";
}
//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
     else {
      alert = "you do not have enough to pay fare sorry";
     }

//d. write the above if/else statement again as a ternary
   if (metrocard >2.75) {
   alert = "you have enough to ride";
   }
   else {
   alert = "you do not have enough to pay fare sorry";
   }

//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions
//a. write a function named helloWorld that returns the value 'Hello World!'
     console.log('Hello World!');

//b. console log the value returned from running the function helloWorld

//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
     const myArray = [Cat, Dog, Parrot, Snake, Hamster]

//b. an array's index starts at:
     An array's index starts at 0.
//

//4. loops
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0
     for (let i = 0; i < 11; i--) {
      if (i !==10,8,6,4,2){
       console.log(i); 
      }
     }

//5. objects
//a. define a variable named 'bike'
     var bike = ""

//b. assign an object to bike
     bike = "Helmet"

//c. give the object 3 properties: handlebars, color, wheels
  const Helmet = {
  handlebars:""
  color: ""
  wheels: ""
};

//d. give each property a value
  const Helmet = {
  handlebars:"2",
  color: "pink",
  wheels: "4"
};

//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8. 
**You do not need to accept user input this differs from Eloquent JS's directions 

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/
