// Javascripts Q's


//1. Output statement? 
let weather = "spring";
let clothingChoice = "";
 
if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);

//answer - Put on rain boots
//๐ Nice work! Since weather equals spring, clothingChoice is set to "Put on rain boots.".

//2. How would you properly refactor this code block using the ternary operator?

if (walkSignal === 'Walk') {
    console.log('You may walk!'); 
} else {   
    console.log('Do not walk!');
}

//answer
walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

//3. Which of the following variables contains a truthy value?


let varFour = '';

let varThree = 0;

let varOne = 'false';

let varTwo = false;

//answer - 
let varOne = 'false';

//4. To make this statement valid, what operator belongs in the ___ space below?

if (coin ___ "heads") {
  console.log('coin is heads!');
} else {
  console.log('coin is tails...');
}

:=
either = or ===
=
===
 
 //answer - 
 === compares values
 ===

๐
Yes! The === operator is used to compare values.
 
 5. What will the code block log to the console?

let runTime = 35;
let runDistance = 3.5;
 
if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}

Youโre not making your pace!
Keep on running!
Nice workout!
Youโre super fast!
 
 //answer - Nice workout!
 // ๐ Exactly right! The condition (runTime is greater than 30 OR runDistance is greater than 3) is true.
 
 6. // How would you properly refactor this code block using the ternary operator?

if (walkSignal === 'Walk') {
    console.log('You may walk!'); 
} else {   
    console.log('Do not walk!');
}

walkSignal ? console.log('You may walk!') : console.log('Do not walk!');

walkSignal === 'Walk' : console.log('You may walk!') : console.log('Do not walk!');

walkSignal === 'Walk' ? ('You may walk!') : ('Do not walk!');

walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

//Answer - walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!');

7. // If isHungry equals true, which of the following expressions evaluates to true?

!isHungry

isHungry !== false

!isHungry === true

isHungry === false

//answer - isHungry !== false
๐
Correct! isHungry does not equal false.

8. // find output
let needTacos = true;
 
if (needTacos) {
    console.log("Finding tacos");
} else {
    console.log("Keep on keeping on!");
}

//answer - Finding tacos
๐ Correct! Since needTacos is true, the first block will run.

9. // What will the code block log to the console?

let groceryItem = "apple";
 
switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}

Papayas are $1.29

Tomatoes are $0.49

Invalid item

Limes are $1.49

//answer - Invalid item
๐ Correct! Since groceryItem = "apple", it does not match any of the cases, so the default block will run.

10. // Translate this to JavaScript:

Log โBear!โ to console if isFurry is true and weight is over 100 pounds.


if (isFurry && weight > 100) {
  console.log("Bear!");
}

if ( !(isFurry && weight > 100) ) {
  console.log("Bear!");
}

if (isFurry || weight > 100) {
  console.log("Bear!");
}

//answer - 
if (isFurry && weight > 100) {
  console.log("Bear!");
}
๐
Correct! This only logs โBear!โ if isFurry is true and weight is greater than 100.

11. // What is the general purpose of a conditional statement?


Conditional statements make all computers capable of thought.


Conditional statements answer binary (yes-or-no) questions.

(Selected)Correct:
Conditional statements evaluate code as either true or false.

๐
Great work!
 
 12. //
