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
//👏 Nice work! Since weather equals spring, clothingChoice is set to "Put on rain boots.".

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
 
 //answer - === compares values
 
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

You’re not making your pace!
Keep on running!
Nice workout!
You’re super fast!
 
 //answer - Nice workout!
 // 👏 Exactly right! The condition (runTime is greater than 30 OR runDistance is greater than 3) is true.
 
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
👏
Correct! isHungry does not equal false.

8. // Finding tacos
👏
Correct! Since needTacos is true, the first block will run.

8. //
