///////////////////////////    NaN     /////////////////////////////////

var greeting = "Hello, class!";

var something = greeting / 2;

something;  // NaN (Not a Number)
Number.isNaN( something );  // true

Number.isNaN ( greeting );  // false 

///////////////////////////    COERCION (String concatenation -> number to string)     /////////////////////////////////

var msg1 = "There are";
var numStudents = 16;
var msg2 = "students."
console.log(msg1 + numStudents + msg2);  // the plus operators doing concatenate that converted 16 to string

// "There are 16 students."

var numStudents = 16;

console.log(
    `There are ${numStudents+""} students.` // empty string is to convert something to a string
);

// "There are 16 students."

// Number + Number = Number
// Number + String = String
// String + Number = String
// String + String = String

///////////////////////////    COERCION (String concatenation -> string to number)     /////////////////////////////////

var numStudents = "16";

function addAStudent(numStudents) {
    console.log(numStudents + 1);
}

addAStudent(
    Number(numStudents)
);

// 17

///////////////////////////    BOOLEANS     /////////////////////////////////

if (studentsInputElem.value) {  // as default if we just put only if statement so it means true 
    numStudents = Number(studentsInputElem.value);
}

// NOTES: 
// Useful: when the reader (user) is focused on what's important 
// Dangerous: when the reader (user) can't tel what will happen
// Better: when the reader understands the code

///////////////////////////    EQUALITY     /////////////////////////////////

// == allows coercion (types can be different)
// === disallows coercion (types must be same)

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2  // true 
studentName1 === studentName2  // true (same type)

workshopEnrollment1 == workshopEnrollment2  // true
workshopEnrollment1 === workshopEnrollment2  // true (same type)



