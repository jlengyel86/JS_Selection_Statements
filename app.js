console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
 // Exercise 1: Guessing Game

let magicNumber = 3;

let guessNumber = prompt("What is the magic number?");

if (guessNumber == magicNumber) {
  console.log("Congrats! You guessed the magic number.")
} else if ( guessNumber > magicNumber) {
  console.log("Guess was too high :/. Try again.")
} else if (guessNumber < magicNumber) {
  console.log("Guess was too low >:(. Try again.")
}

// Exercise 2: Birth Season

let birthMonth = prompt( "What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "febuary":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
      console.log("Summer");
      break;
  case "september":
  case "october":
  case "november":
      console.log("Autumn")
      break;
  default:
    console.log("I don't recognise that month...")
}

//Exercise 3: Large Purple Tank Top

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    default:
      type = "Other";

}

if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}



if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}


console.log(`Product: ${size} ${color} ${type}`);