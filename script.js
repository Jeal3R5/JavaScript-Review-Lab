//////////////////////////////////////////////////////////////////
//I. Variables & DataTypes
//////////////////////////////////////////////////////////////////


//////////////////////////
//A. Q & A
//////////////////////////

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



//////////////////////////
//B. Strings
//////////////////////////

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




//////////////////////////
//C. Booleans
//////////////////////////

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




//////////////////////////
//D. The Farm
//////////////////////////

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


//////////////////////////
//E. Driver's Ed
//////////////////////////

//1. Make a variable that holds a person's age; be semantic

//let age = 27;

//2. Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// if (age >= 16) {
//   console.log("Here are the keys!")
// } else if (age < 16) {
//   console.log("Sorry, you're too young")
// }



//////////////////////////////////////////////////////////////////
//II. Loops
//////////////////////////////////////////////////////////////////

//Remember: use let when you initialize your for loops!

//////////////////////////
//A. The Basics
//////////////////////////

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




//////////////////////////
//B. Get Even
//////////////////////////

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



//////////////////////////
//C. Give Me Five
//////////////////////////

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
//   if ( i % 5 === 0) {
//     console.log(i + " I found a number. High Five!");
//   } else if (i % 3 === 0) {
//     console.log(i + " I found a number. Three is a crowd");
    
//   } else {
//     console.log(i);
//   }
// }

//3.  For numbers divisible by both three and five, be sure your code prints both messages

// let i = 0;

// for (let i = 0; i < 101; i++) {
//   if ((i % 5 === 0) && (i % 3 === 0)) {
//     console.log(i + " I found a number. High Five!" + "\n" + i + " I found a number. Three is a crowd");
//   } else if (i % 5 === 0) {
//     console.log(i + " I found a number. High Five!");
//   } else if (i % 3 === 0) {
//     console.log(i + " I found a number. Three is a crowd");
//   } else {
//     console.log(i);
//   }
// }



//////////////////////////
//D. Savings account
//////////////////////////

//1. Write code that will save the sum of all the numbers between 1-10 to a variable called bank_account
 // -Check your work! Your bank_account should have $55 in it

// const arrayToSum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arrayToSum.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue
// }, 0)

// console.log(sum);

//2. You got a bonus! Your pay is now doubled each week.  Write code that will save the sum of all the numbers between 1-100 multiplied by 2
  //-Check your work! Your bank_accounts should have $10,100

// let bank_account = 0;
// let bank_accountSum = 0;
// let i = 0;


// while (i < 101) {
//  bank_accountSum += i;
//   i++;
//   bank_account = bank_accountSum * 2;
// }

// console.log(`Your account balance is: $${bank_account}`);




//////////////////////////////////////////////////////////////////
//III. Arrays & Control Flow
//////////////////////////////////////////////////////////////////

//////////////////////////
//A. Talk about it
//////////////////////////

//1. What are the things in an array called?
// Elements

//2. Do arrays guarantee those things will be in order?
// No

//3. What real-life thing could you model with an array?
//Student test averages




//////////////////////////
//B. Easy Does It
//////////////////////////

//1. Create an array that contains three quoates and store it in a variable called quotes

// const quotes = ["It's your attitude, not your aptitude, that determines your altitude", "It's just another manic Monday", "Blah-bitty-blah-blah"];

// console.log(quotes[0]);
// console.log(quotes[1]); 
// console.log(quotes[2]); 




//////////////////////////
//C. Accessing Elements
//////////////////////////

//Given the following: 
//  const randomThings=[1, 10, "Hello", true]

//1. How do you access the 1st element in the array?
//console.log(randomThings[0]);

//2. Change the value of "Hello" to "World"
//randomThings[2] = "World";

//3. Check the value of the array to make sure it updated the array. How? Why, yess! console.log();
//console.log(randomThings[2]);




//////////////////////////
//D. Change Values
//////////////////////////

//Given the following array:
//const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1. What would you write to access the 3rd element of the array?
//console.log(ourClass[2]);

//2. Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat"
// console.log(ourClass [4]);

//3. Add a new element, "Cloud City" to the array
//ourClass.push("Cloud City");
//console.log(ourClass);




//////////////////////////
//E. Mix it up
//////////////////////////

//Note: You don't really need .splice() for these.  You could use it, but there are simpler array methods that are more appropriate.

//Given the following array:
//const myArray = [5, 10, 500, 20];

//1. Add the string "Egon" to the end of the array.  Add another string of your choice to the array
//.push("Egon");
//console.log(myArray);
//myArray.push("Who ya gonna call?");
//console.log(myArray);

//2. Remove the 5 from the beginning of the array
//.shift();
//console.log(myArray);

//3. Add the string "Bob Marley" to the beginning of the array 
//myArray.unshift("Bob Marley");
//console.log(myArray);

//4. Remove the string of your choice from the end of the array
//myArray.pop();
//console.log(myArray);

//5. Reverse this arary using Array.prototype.reverse().  Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

//myArray.reverse();
//console.log(myArray);

//Yes, the array was mutated
    //to mutate the array means to change the array itself rather than returning a new array.
//The .reverse() method returns the reversed array




//////////////////////////
//F. Biggie Smalls
//////////////////////////

//Create a variable that contains an integer.
//Write an if...else statment that:

//1. console.log()s "little number" if the number entered is less than 100

// let num = 23;

// if (num < 100) {
//   console.log("little number");
// }

// console.log(num);

//2. console.log()s "big number" if the number is greater than or equal to 100.
// let num = 432;

// if (num >= 100) {
//   console.log("big number");
// }

// console.log(num);




//////////////////////////
//G. Monkey in the Middle
//////////////////////////

//Write an if...else if...else statement:

//1. console.log("little number") if number entered is  less than 5
//2. If the number entered is more than 10, log "big number"
//3. Otherwise, log "monkey"

// let num = Math.floor(Math.random() * (15 - 0)+ 0);
// console.log(num);

// if (num < 5) {                    //1.
//   console.log("little number");
// } else if (num > 10) {            // 2.
//   console.log("big number");
// } else {                          // 3.
//   console.log("monkey");
// }




//////////////////////////
//H. What's in Your Closet?
//////////////////////////

//Using the given data:
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

/*1. What's Kristyn wearing today? Using brakcet notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that" + the third item in Kristyn's closet + " today!" to the console. */

//console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2. Kristyn just bought some sweet shades! Add "raybans" to her closet AFTER "yellow knit hat"

//kristynsCloset.splice(6, 0, "raybans");
//console.log(kristynsCloset);

//3. Kristyn spilled coffee on her hat...modify this item to read "stained knit hat" instead of "yellow"

//kristynsCloset[5] = "stained knit hat";
//console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array

//console.log(thomsCloset[0][0]);

//5. In the samae array, access one item from Thom's pants array
//console.log(thomsCloset[1][1]);

//6. Access one item from Thom's accessories array

//console.log(thomsCloset[2][2]);

//7. Log a sentence about what Thom's wearing.  Ex: "Thom is looking fierce in a grey button-up, jeans, and wool scraf!"

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", " + thomsCloset[2][2] + "!");

//8. Get more specific about what kind of PJs Thom's wearing this winter.  Modify the name of his PJ pants to Footie Pajamas

//thomsCloset[1][2] = "footie pajamas";
//console.log(thomsCloset[1]);




/////////////////////////////////////////////////
//IV. Functions
/////////////////////////////////////////////////


//////////////////////////
//A. printGreeting
//////////////////////////
   

//////////////////////////
//B. printCool
//////////////////////////

// function printCool(name) {
//   console.log(`${name} is cool`)
// }

// printCool("Captain Reynolds");




//////////////////////////
//C. calculateCube
//////////////////////////

// function calculateCube(num) {
//   console.log(Math.pow(5, 3));
// }

// calculateCube(5);





//////////////////////////
//D. isVowel
//////////////////////////

// function isVowel(letter) {
//   if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };


//isVowel("a");
//isVowel("f");




//////////////////////////
//E. getTwoLengths
//////////////////////////

// function getTwoLengths(string1, string2) {
//   let getTwoLengthsArray = [(string1.length), (string2.length)];
//   console.log(getTwoLengthsArray)
// }

// getTwoLengths("Hank", "Hippopopalous");




//////////////////////////
//F. getMultipleLengths
//////////////////////////

// function getMultipleLengths(string1,string2, string3, string4, string5) {
//   let getMultipleLengthsArray = [string1.length, string2.length, string3.length, string4.length, string5.length];
//   console.log(getMultipleLengthsArray)
// };

// getMultipleLengths("hello", "what", "is", "up", "dude");





//////////////////////////
//G. maxOfThree
//////////////////////////

// function maxOfThree(num1, num2, num3) {
//   if (num1 == num2 && num1 == num3 && num2 == num3) {
//     console.log(num1);
//   } else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
//   } else if (num3 > num1 && num3 >num2) {
//     console.log(num3);
//   }
// };
  

// console.log(maxOfThree(6, 9, 1));
// console.log(maxOfThree(1, 2, 3));
// console.log(maxOfThree(115, 79, 315));




//////////////////////////
//H. printLongestWord
//////////////////////////

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


function printLongestWord(arr[str]) {
  let longestWord = ""
  for (let i = 0; i < arr[str].length; i++) {
    if ()
  }
}


function findLongestWord(str) {
  const splStrArray = str.split(' ');

  //initialize a variable to store the longest word
  let longestWord = "";
  for(let index = 0; index < splStrArray.length; index++){
    if(splStrArray[index].length > longestWord.length){
         longestWord = splStrArray[index];
     }
  }
 return longestWord
}







//////////////////////////////////////////////////////////////////
//V. Objects
//////////////////////////////////////////////////////////////////

//////////////////////////
//A. Make a user object
//////////////////////////

//////////////////////////
//B. Update the User
//////////////////////////

//////////////////////////
//C. Adding keys and values
//////////////////////////

//////////////////////////
//D. Shopaholic!
//////////////////////////

//////////////////////////
//E. Object-within-object
//////////////////////////

//////////////////////////
//F. Loops
//////////////////////////

//////////////////////////
//G. Functions can operate on Objects
//////////////////////////








