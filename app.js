//ASSIGMENT 1 : Javascript Introduction - Fundamentals & Data Types
//ASSIGNMENT 2 : Javascript Introduction - Conditionals 

//ASSIGMENT1

//Variables

var life = 100 ; // This is my life bar NUMBER

life = life - 10 ;

//90

life = life / 10

var name = "Sigurborg"; //This is the name displayd in the game STRING

var checkout = true ; //online shopping, if product is awalible then its 'true' if not its 'false'
//"var checkout = flase ; is BOOLEAN

//  EXAMPLE OF BOOLEAN 
// public class Main {
    //public static void main(String[] args) {
      //int x = 10;
      //int y = 9;
      //System.out.println(x > y); // returns true, because 10 is higher than 9  
    //}
  //}

//if checkout then we can buy the product

var box = null ; //this variable has no value

//CONST

const life2 = 100 ; // constant means that this value is going to be the same so you cant add  (fx. life2 =50 or const life2 = 1000, right ther i would need a nother name for the variable)

// FUNCTIONS - a set of codes that you write
//a function can be called when an event occurs, like when the user clicks a button.
//example 1

function adder(num1, num2) {  //give instructions of what we want to do.
    console.log(num1 + num2 )
}

adder (5,10); //this comes out as fifteen

//example 2
const myname = "Sigurborg"; 
const youtuber = "Traversy Media"

function toUpper(text) {  //give instructions of what we want to do.
    const upperCased = text.toUpperCase(); //We can add functions that are built into javascript
    console.log(upperCased);
}
toUpper(myname); //Then in comes out as my name "SIGURBORG" in uppercase in the console
toUpper (youtuber); //Then it comes out also "TRAVERSY MEDIA" in uppercase in the console


console.log(life) ;

//ASSIGNMENT 2

//OPERATORS

//Operators . Assign values to variables and add them together:

let x = 10;         // assign the value 10 to x
let y = 30;         // assign the value 30 to y
let z = x + y;     // assign the value 40 to z (10 + 30)

//Trying out Arithmetic Operators. Learn the operators like / % ++ and --
let x = 5;
let y = 2;
let z = x % y;

//Assignment Operators

int x = 30;
x += 10;

//String Operators

let text1 = "Sigurborg";
let text2 = "Selma";
let text3 = text1 + " JS-Master" + text2; // The text will be Sigurborg JS-Master Selma

let text1 = "How do you";
text1 += "do";

//Text will be: 'how do you do'

//Adding Strings and Numbers
//Adding two numbers, will return the sum, but adding a number and a string will return a string: 

let x = 10 + 10;
let y = "5" + 10;
let z = "Hello" + 5;
//Outcome is then 20-510-Hello10

//JavaScript Comparison Operators same BOOLEAN
//FX. logging into a website with a password than you use BOOLEAN. If the password is correct you go forward, "if else" there is an error. 

//""==""	equal to:
//FX.	
//Assign 5 to x, and display the value of the comparison (x == 8)
//let x = 5
//FALSE

//Example of Comparison and Logical Operators:

//Example of usage : if (age < 18) text = "Too young to buy alcohol";

let age = document.getElementById("age").value;
let voteable = (age < 18) ? "Too young":"Old enough";
document.getElementById("demo").innerHTML = voteable + " to vote.";

//The Unary + Operator
let y = "5";      // y is a string
let x = + y;      // x is a number

