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
