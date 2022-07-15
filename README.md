## THREE PILLARS OF JS

1. Types/Coercion
2. Scope/Closures
3. this/Prototypes

## TYPES / COERCION

* Primitive Types
* Converting Types
* Checking Equality

1. Primitive Types 

> "In JavaScript, everything is an object"

* Undefined
* String
* Number
* Boolean
* Object
* Symbol

* null (also primitive type)
* Function (is not a primitive type just a subtype of the object type) also Array is not a primitive type

> "In JavaScript, variables don't have types, values do"

```
var v;
typeof v;  // undefined

v = "1";
typeof v;  // string

v = 2;
typeof v;  // number

v = true;
typeof v;  // boolean

v = {};
typeof v;  // object

v = Symbol();
typeof v;  // symbol

typeof doesntExist;  // undefined

var v = null;
typeof v;   // object (this is an histrorical BUG in JavaScript)

v = function(){};
typeof v;  // function

v = [1, 2, 3];
typeof v;  // object (subtype of the object there)

```









