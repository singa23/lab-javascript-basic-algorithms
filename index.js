// Iteration 1: Names and Input

let hacker1 = "nathalie";
console.log(`the driver's name is ${hacker1}`);
let hacker2 = "singabe" ;
console.log(`the navigator name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length === 8 ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    
  }

// Iteration 3: Loops

// JE COMMENCE L'ITERATION 3

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase() + " ");
 }
 if (hacker2 < hacker1) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}