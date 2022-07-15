///////////////////////////    VALUES     /////////////////////////////////

42 // Integer
3.14 //Flow (decimal)

"Hello, friend" // String you can use "" or '' both are same

true // Boolean
false

null // To say it's empty 
undefined

[1, 2, 3] // Array, start from 0 index to x index, the number 3 at position 2 or index 2
{ name: "Abdullah" } // An object and "Abdullah" is the value of name object

// primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

///////////////////////////    OPERATIONS     /////////////////////////////////

3 + 4 // binary operators
43 - 1 // binary operators (like plus and minus)

"Kyle" + "Simpson" // -> 'Kyle Simpson'

!false //unary operator, it means single operand involved in the operation

3.0 == 3 // comparison using Lucy quality operator (double equals)

3 < 4 // comparison

true || false // or operator 

///////////////////////////    TYPES     /////////////////////////////////

typeof 42 // number

typeof "kyle" // string

typeof true //boolean

typeof undefined // undefined

typeof { age: 39 } // object

typeof null // object (but empty)

typeof [1,2,3] // object (because inside an array are subtype which is an object)

///////////////////////////    VARIABLES     /////////////////////////////////

var name = "Kyle Simpson"; // ; it's a semicolon that is denoting that we finished a statement

var age; // create a empty variable
age = 39; // and put value 39 to variable age

var friends = ["Brandon", "Marc"];

console.log( friends.length ); // 2
console.log( friends[1] ); // Marc

var age = 39;
 
age++; // age is equal to age plus 1
age += 2; // the += allows it to tell it how much we wanna increment

age; //42

///////////////////////////    EXPRESSION AND STATEMENTS     /////////////////////////////////

var age = 39;

age = 1 + (age * 2);

age; //79

///////////////////////////    IF AND ELSE     /////////////////////////////////

var age = 39;

if (age >= 18) {
    goVote();
}

/////////////////////

if (isEnrolled()) {
    takeClass();
}
else {
    enrollFirst();
}

/////////////////////

var isEnrolled = true;

if(isEnrolled) {
    console.log("Take the class!");
}
else {
    console.log("Enroll First");
}

//Take the class!

///////////////////////////    lOOPS     /////////////////////////////////

var students = [ "Matt", "Sarah", "Susan" ];

while (students.length > 0 ) { // all of the students that has position greater than 0 (Matt, sarah, and susan)
    let student = students.pop();
    console.log(`Hello, ${student}!`); // `` it called interpolated string
}

///////////////////////////    FUNCTIONS     /////////////////////////////////

function timeRemaining(timeElapsed, endTime) { 
    return endTime - timeElapsed;
}

var left = timeRemaining(42, 240); // The formula will takes 42 as timeElapsed and 240 and endTime and count those and give the return following by the function timeRemaining that we had defined it before

left; // 198







