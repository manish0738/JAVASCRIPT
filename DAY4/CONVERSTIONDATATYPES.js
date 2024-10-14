let score = 33

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 => 33
// 33aab => 33
// manish => Nan  Not a Number
// true => 1 ; false => 0

let isLogedIn = 1
let booleanisLogedIn = Boolean(isLogedIn)
console.log(booleanisLogedIn);

// 1 => true , 0 => false
// "" => false
// "manish" => true

let someNumber = 22
let stringNumber = String(someNumber)
console.log(stringNumber);

// 22 => 22
// "" => NOT SHOW
// "MANISH" => MANISH
// null => null
// NOT ASSIGN => UNDEFINED