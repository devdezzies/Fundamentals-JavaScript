///////////////////////////    this     /////////////////////////////////

// A function's "this" references the execution context for that call, determined entirely by how the function was called.

var workshop = {
    teacher = "Kyle",
    ask(question) {
        console.log(this.teacher, question);
    }
}

workshop.ask("What is implicit binding?");
//  Kyle What is implicit binding?

/////////////////

function ask(question) {
    console.log(this.teacher, question);   // one function that can be reused against a lot of different contexts
}

function otherClass() {
    var myContext = {
        teacher: "Suzy"
    };
    ask.call(myContext, "Why");  // Suzy Why?
}

otherClass();


// instead of using myContext.ask, here we just said ask.call, and we gave it an object to use for this keyword

///////////////////////////    PROTOTYPES     /////////////////////////////////

function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.protoype.ask = function(question) {
    console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'protoype' a class?");
//  Kyle is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?

