// Iteration 1: Names and Input

let hacker1 = `Steven`;
  console.log (`the drivers name is ${hacker1}`);
let hacker2 = `Jimmy`
  console.log (`the navigators name is ${hacker2}`);


// Iteration 2: Conditionals

let hacker1 = `Steven`;
  console.log (`the drivers name is ${hacker1}`);
let hacker2 = `Jimmy`
  console.log (`the navigators name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log (`the driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log (`it seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let driverChars = '';

for(let i = 0; i < hacker1.length; i++) {
  driverChars += (hacker1[i].toUpperCase() + ' ')
}

console.log(driverChars);

let namereverse = '';

for(let i = hacker2.length - 1; i >= 0; i--) {
  namereverse += hacker2[i];
}

console.log(namereverse)

if (driver.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(hacker1) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")