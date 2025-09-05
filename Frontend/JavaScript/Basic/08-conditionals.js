// if, else if, else

//if
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// else

if (age < 13) {
    console.log("You are a child.");
} else {
    console.log("You are not a child.");
}

// else if

if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// Operator ternario
age < 13 ? console.log("You are a child.") :
age < 18 ? console.log("You are a teenager.") :
age < 65 ? console.log("You are an adult.") :
console.log("You are a senior.");

// switch

let day = 0
day+=2
let dayname

switch (day) {
    case 0:
        dayname = "Sunday";
        break;
    case 1:
        dayname = "Monday";
        break;
    case 2:
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "Wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday";
        break;
    default:
        dayname = "Invalid day.";
}

console.log("Today is " + dayname + ".");