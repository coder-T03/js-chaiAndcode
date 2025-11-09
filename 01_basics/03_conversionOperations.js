//conversions

let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  // making sure we will reced value of score in number datatype.
console.log(typeof valueInNumber);
console.log(valueInNumber); // if let = "33abc"  //    Not strict check on numbers in JS

// "33" can convert in 33
//"33abc" => NaN  but type will be show as number
//  true  =>1; false => 0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 =>false
//"" => false
//"hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber)

// 33 will be output as 33 but if we will typeof it answer will be string