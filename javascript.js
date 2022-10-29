/* Notes from reading. https://javascript.info/object

An object can be created with {...}. A property is a "key:value" pair. Imagine an object as a cabinet with signed files. Every 
piece of data is stored in its file by the key. Easy to find a file by its name or add/remove a file. 

let user = new Object ( ); ex of "object constructor" syntax. notice this uses ( ) instead of { }.
let user = { }; ex of "object literal" syntax. notice this uses { } instead of ( ).

ex of creating an object and putting in two properties. this object can be imagined as a cabinet with two signed files labeled
name and age.

let user = {  // an object
    name: "John", // key "name". store value "John"
    age: 30  // key "age". store value 30
};

we can add/remove/read files. access property values using dot notation. 

alert(user.name); // John
alert(user.age); // 30

the value can be any type. ex of adding a boolean data type of true.

user.isAdmin = true;

now the filing cabinet has name, age and isAdmin. 

delete user.age; // this will remove the age property so the cabinet now only has name and isAdmin

ex of a multi-word property.

let user = {  // an object
    name: "John", // key "name". store value "John"
    age: 30,  // key "age". store value 30
    "likes birds": true,  // multi-word must be in quotes. and the comma at the end of true is optional
};

dot notation doesn't work on multi-word properties. user.likes birds = true. this will give an error. need to use [  ]
let user = { }; // create an object

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // shows true 

// delete
delete user["likes birds"];

using an expression with square brackets to get the property name using a var.

let key = "likes birds";
user[key] = true; // same as user["likes birds"] = true;

ex of key being calculated at run time or depending on user input. the user types something and the key is used to access
the property. 

let user = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");  // the prompt has a default value of "name".
alert(user[key]); 

when the user sees the prompt with "name" as the default value and leaves it alone, then it would be the same as this
alert(user[name]); // shows John, if enter "name". if enter "age", then it would be the same as 

alert(user[age]);  // shows 30


same ex but showing that dot notation can't be used in the way that the [key] ex was used.
let user = {
    name: "John",
    age: 30
};

let key = "name";  // no prompt this time. just the "name" in key var
alert(user.key); // shows undefined. thinking it would be user.name to show John, but this doesn't work.

so far, the property is shown by using a key:value pair. ex name: "John" or age: 30. when you want to use the property in a var,
you need [ ] instead of dot notation. ex is let key = "name". to show the name using alert(user.key), you will get undefined.

you need to use alert(user[key]) and it will show the property for the var of key

COMPUTED PROPERTIES:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5, // the name of the property is taken from the var fruit
};
alert(bag.apple); // 5 if fruit = apple

the ex above, notice the let bag { }. the property for this part is [fruit]: 5. it could have been written like apple: 5.
whether it is [fruit]:5 or apple:5, this property is called a literal. because let fruit = prompt... is used, the fruit is 
a var and to access the var, it uses [fruit]. in this ex, the [fruit] is apple. so writing it like [fruit]:5 is the same as
apple: 5. and even though the property uses [ ], when you use alert, you can still use dot notation.

the below is the same as the previous lines at line 88 to 92. but notice you can't use dot notation below.

let fruit = prompt("Which fruit to buy?", "apple"); // using a var
let bag = { }; // creating an object but no properties yet
bag[fruit] = 5 // since bag has no properties yet. this line will add the fruit property with a value of 5. notice bc 
the fruit is a var, you need [ ] to access the var

now bag will look like this after bag[fruit] = 5 adds the property
let bag = {
    fruit: 5,
};

basic idea of a computed property is: [fruit] means the property name should be taken from fruit. so if a user types 
"apple", then the bag { } will now have {apple: 5}.

can have more complex expressions with [ ]

let fruit = "apple";
let bag = {
    [fruit + "Computers"]: 5  // bag object has a property of appleComputers. it will be bag.appleComputers = 5.
};

dot notation is used on simple property names. more complex ones will use [ ]

PROPERTY VALUE SHORTHAND: 

function makeUser (name, age) {
    return {
        name: name,
        age: age,
        // other properties
    };
}

let user = makeUser("John", 30);
alert(user.name); // shows John

the above is a function that receives params/var for name and age. it uses those params/var and creates an object with the properties 
using the same name as the params/var. the let user = is calling the function and passing John and 30 to it. the function returns
an object and when you use alert(user.name), you'll see the name.

since the function and object property are using the same names for the param/var and property, usually shorthand is used like this:

function makeUser (name, age) {
    return {
        name, // same as name: name
        age, // same as age: age
        // more properties
    };
}

PROPERTY EXISTENCE TEST, "IN" OPERATOR

You can access properties that don't exist. You won't get an error. It will return undefined. 

let user = { }; // create object, no properties yet.
alert(user.noSuchProperty === undefined); // will show true bc there is no property with the name of noSuchProperty. 

you can use "in" to check for a property.
"key" in object. "key" is the property name. remember they are called key: value for property: value

let user = {name: "John", age: 30}; // object is user. 2 properties aka keys.
alert("age" in user); // shows true bc user.age exists
alert("blabla" in user); // shows false bc user.blabla doesn't exist.

notice that "age" in user has " " for the property name. if you omit the " ", then it means a var should contain the name of the
property to be tested. 

let user = {age: 30};
let key = "age";
alert(key in user); // shows true. "age" exists

THE "FOR... IN" LOOP

A special form of loop exists to walk over all the keys/properties of an object. for... in.
for (key in object) {
    // executes the body for each key among object properties
}

let user = {
    name: "John",
    age: 30,
    isAdmin = true
};

for (let key in user) {
    alert(key); // shows all the keys, but not the values: name, age, isAdmin
    alert(user[key]); // shows the values of the keys: John, 30, true
}

notice that all "for" constructs allow us to declare the looping var inside the loop, like "let key" in the ex above. 
you can use any var name instead of key. 

for (let prop in user) {
    alert(prop); // shows all the properties/keys, but not the values: name, age, isAdmin
    alert(user[prop]); // shows the values of the properties/keys: John, 30, true
}

TASKS

1) 

let user = {  // empty object created called user

};

user.name = "John"; // add name and value
user.surname = "Smith"; // add surname and value
user.name = "Pete"; // change value of name
delete user.name; // remove the name property

2)

let schedule = { }; 
isEmpty(schedule); // this will show true

// after you add properties/keys with values, then when you use isEmpty(schedule), it will show false. also rememeber with functions
// when you pass it something, you can pass it any named thing. when you created the function, you used isEmpty(obj). this doesn't
// mean it has to receive something called obj. when you call it with isEmpty(schedule), it still works. during function creation, 
// the parameter name it receives is just a place holder so it expects to receive something but it doesn't care what name it receives. 
// all it is waiting for is a single named thing. if you had isEmpty(obj, obj2), then it would need 2 things.

schedule["8.30"] = "Get up"; // adds the first prop/key of 8:30 with value of Get up.
// now when you do isEmpty(schedule), you'll see false instead of true

function isEmpty(obj) { // the function receives the object as the param/var

    for (let prop in obj) { // prop is the name for each key/property in the object that was received by the function
        return false; // this action is done on each property. 
        // if there is a property, false will be returned. if there is no property, then this loop will not run
    }
    return true; // when there are no properties/keys in the object, the loop will not run so the function just returns true
}

// Just loop over the object and return false immediately if there’s at least one property.

3)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0; // you need to put = 0. at first you had only "let sum" with no = anything and when you tried to alert the sum,
// it showed NaN
for (let prop in salaries) {
    sum = sum + salaries[prop]; // notice this is salaries[prop]. the [ ] is needed bc you want the values, not the property/key
    // names. if you had just prop, then the loop will just grab the property/key name. remember [ ] are when you want to grab 
    // the values
}
alert(sum);

4)

let menu = {
    width: 200, 
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {  // this receives the menu object
    for (let prop in menu) { // for each property/key in the menu object, it will do the below actions
        if (typeof menu[prop] == "number") { // checks to see if the value of the prop is a number
        menu[prop] = menu[prop] * 2; // if it is a number, then it mulitplies it by 2. 
        } 
        
        // you first had "menu.prop = menu[prop] * 2" thinking that menu.prop which is the name of the property and not the 
        // value, and that was ok bc you thought you were giving the existing property name a new value. this doesn't work. 
        // if you want to work with a value instead of the prop name, you must use [prop]. also since a loop does the action
        // to every prop, you don't need to worry about skipping or the order of a prop when dealing with number values. 
        // sicne you want to multiply each value by 2, just make sure the value is a number and do the action to it and that's why
        // you have the if statement to check for numbers to skip the strings
    }
}

*/
