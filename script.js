//////////////////////////////////////////////////////////////////
// Variables & DataTypes
//////////////////////////////////////////////////////////////////

// A. 

//1. How do we assign a value to a variable?

//You declare the variable with let or const based on if it will be changed later in code, then you type the variable name, equal sign (assigner), followed by the value you want to assign to the variable

// let one = 1;       //this value can be changed
// let two = 2;       //this value can be changed
// const three = 3;   //this value is not be able to be changed


//2. How do we change the value of a variable?

//if the variable is declared with const, you are not able to change the value
//if the  varibable is declared with let then you type the variable name, the assigner (=), and the new value. for ex:
    //console.log(one);

     // one = 1 + 1;
    //console.log(one);



//3. How do we assign an existing variable to a new variable?

// start by declaring the new variable, then the assigner(=), followed by the variable you want to assign to the new variable 
// let onePlusOne = one;
// console.log(onePlusOne);


//4. Remind me, what are declare, assign, and define?

//declare = creates (defines) a new variable, can only be done once in a document

//assign = give a value to the variable

// define = includes the declaration (let/const/var), the initialization (designating memory) and then assigning a value; this can be done more than once in a document 


//5. What is psuedocoding and why should you do it?

// Psuedocoding is plain language describing what the program/document/etc needs to include, it is a way for coders to see what needs to be done, and how to go about it BEFORE writing the actual code that is needed to make it run.


//6. What percentage of time should be spent thinking about how you're going to solve a problem vs. actually typing in code to solve it?

//It was discussed in class that 75-80% time should be spent planning (a lot, was in my notes). The actual amount of time will vary somewhat based on the type of project, and other factors. The point is you should spend a significant amount of time planning as this is going to make it easier to write the actual code.



//////////////////////////////////////////////////////////////////
//B. Strings
//////////////////////////////////////////////////////////////////


//1. Create a variable called firstVariable
//  -Assign it the value of the string "Hello World"
//  let firstVariable = "Hello World";
  //console.log(firstVariable);

//-Change the value of this variable to some number
 // firstVariable = 62;
//console.log(firstVariable);

//-Store the value of firstVariable in a new variable called secondVariable
  //let secondVariable = firstVariable;
  //console.log(secondVariable);

//-Change the value of secondVariable to any string
  
  // secondVariable = "So fun!";
   //console.log(secondVariable);

//-What is  the value of firstVariable?
 // console.log(firstVariable);

//2. Create a variable called yourName and set it equal to your name as a string.  Then, write an expression that takes the string "Hello, my name is" and the variable yourName so that it returns a new string with thhem concatenated
 // ex: Hello, my name is Jean Valjean

// const yourName = "Joan";
// console.log(`Hello, my name is ${yourName}`)




//////////////////////////////////////////////////////////////////
//C. Booleans
//////////////////////////////////////////////////////////////////


//1. using the  provided variable definitions, replace the blanks so that all log statements print true in the console.  Answers should be all valid JS syntax and not weird things that don't make sense but happen to print true to the console

 //  const a = 4;
 //  const b = 53;
 //  const c = 57;
 //  const d = 16;
 //  const e = 'Kevin';

 //  console.log(a < b);
 //  console.log(c > d);
 //  console.log('Name' ===  'Name');
 //  // FOR THE NEXT TWO, USE ONLY && OR ||
 //  console.log(true || false);
 //  console.log(false && false && false && false && false || true);
 //  console.log(false && false);
 //  console.log(e === 'Kevin');
 //  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
 // // console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
 //  console.log(48 == '48');




//////////////////////////////////////////////////////////////////
//D. The farm
//////////////////////////////////////////////////////////////////


// 1. Declare a variable animal, set it to be either "cow" or something else

// let animal = "cow"
// console.log(animal)

// 2. Write code that will print out "moooooo" if it is equal to cow
// if (animal = "cow") {
//   console.log("moooooo")
// };

// 3. Change your code so that if the variable animal is anything other than cow, it will print "Hey! You're not a cow"
// if (animal === "cow") {
//   console.log("moooooo")
// } else if (animal !== "cow") {
//   console.log("Hey! You're not a cow")
// };

// 4. Commit - completed



//E. Driver's Ed

//1. Make a variable that holds a person's age; be semantic

//let age = 27;

//2. Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// if (age >= 16) {
//   console.log("Here are the keys!")
// } else if (age < 16) {
//   console.log("Sorry, you're too young")
// }




/////////////////////////////////////
// LOOPS
////////////////////////////////////

//Remember: use let when you initialize your for loops!


//A. The Basics

//1.  Write a loop that will print out all the numbers from 0 - 10, inclusive

// let i = 0;

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
  
//2. Write a loop that will print out all the numbers from 10 up to and including 400

// let i = 0;
// for (let i = 10; i <= 400; i++) {
//   console.log(i)
// };

//3. Write a loop that will print out every third number starting with 12 and going no higher than 400

// let i = 12

// do {
//   console.log(i)
//   i += 3
// }  while (i <=400)




//B. Get Even

//1. Print out the numbers that are within the range of 1-100
// let i = 1

// do {
//   console.log(i)
//   i++ 
//    } while (i <= 100)

// if (let i = 1; i <= 100; i++) {
//   console.log(i);
// }



//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// let i = 1

// for (let i = 1; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i + "<-- this is an even number");
//   } else {
//     console.log(i);
//   }
// }  




//C. Give me Five

//1. for the numbers 0-100, print out "I found a number. High Five!" if the number is a multiple of 5

// let i = 0;

// for (let i = 0; i < 101; i++) {
//   if (i % 5 == 0) {
//     console.log(i + " I found a number. High Five!")
//   } else {
//     console.log(i);
//   }
// }

//2.  Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of 3


// let i = 0;

// for (let i = 0; i < 101; i++) {
//   if (i % 3 == 0) {
//     console.log(i + " I found a number. Three is a crowd");
//   } else if (i % 5 == 0) {
//     console.log(i + " I found a number. High Five!")
//   } else {
//     console.log(i);
//   }
// }

//3.  For numbers divisible by both three and five, be sure your code prints both messages

let i = 0;

for (let i = 0; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " I found a number. Three is a crowd." + " I found a number. High Five!");
  if (i % 3 == 0) {
    console.log(i + " I found a number. Three is a crowd.");
  } else if (i % 5 == 0) {
    console.log(i + " I found a number. High Five!")
  } else {
    console.log(i);
  }
}
}

//D. Savings account

//1. Write code that will save the sum of all the numbers between 1-10 to a variable called bank_account
 // -Check your work! Your bank_account should have $55 in it

//2. You got a bonus! Your pay is now doubled each week.  Write code that will save the sum of all the numbers between 1-100 multiplied by 2
  //-Check your work! Your bank_accounts should have $10,100