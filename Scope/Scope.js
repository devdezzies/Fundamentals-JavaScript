// SCOPE: WHERE TO LOOK FOR THINGS

///////////////////////////    SCOPE     /////////////////////////////////

var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";  // gonna end up pointing at the variable out in the outer scope
    topic = "React";   // it creates the variable in the global scope
    console.log("Welcome");
}

otherClass();  // welcome

console.log(teacher);  // Suzy
console.log(topic);   // React

///////////////////////////    FUNCTION EXPRESSIONS     /////////////////////////////////

var clickHandler = function(){  // anonymous function expression
        // ..
};

var keyHandler = function keyHandler(){  // named function expression
    // ..
}

/////////////////

var ids = people.map(function getId(person){   // named function expression (recommended)
    return person.id;
});


var ids = people.map(person => person.id);  // anonymous function expression

///////////////////////////    IIFEs     /////////////////////////////////

var teacher = "Kyle";

( function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);   // Suzy [Function Scoping] the variable is only available to call inside of that function
}) (); // it's immediately getting executed

console.log(teacher);   // Kyle

///////////////////////////    BLOCK SCOPING     /////////////////////////////////

var teacher = "Kyle";

{
    let teacher = "Suzy";
    console.log(teacher);  // Suzy
}

console.log(teacher);  // Kyle

/////////////////

function diff(x,y) {
    if(x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    return y - x;
}

///////////////////////////    CLOSURE     /////////////////////////////////

// CLOSURE is when a function "remembers" the variables outside of it, even if you pass that function elsewhere

function ask(question) {
    setTimeout(function waitAsec(){
        console.log(question);
    },100);
}

ask("What is closure?");
// what is closure?

/////////////////

function ask(question) {
    return function holdYourQuestion(){
        console.log(question);
    }
}

var myQuestion = ask("What is closure?");

myQuestion();  // What is closure?


