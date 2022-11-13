const me = {
    name : "minse",
    age : 23
};

/////////////////////////////////////

// this is same with,,,
var name = me.name;
var age = me.age;

console.log(name);
console.log(age);


// this! (if the name of attribute in obj == variable name )
var {name, age} = me;
console.log(name);
console.log(age);


///////////////////////////////////

// this is same with,,,
let li = [1,2,3,4];
var a = li[0];
var b = li[1];
var c = li[2];
var d = li[3];
console.log(a,b,c,d);

// this one! : sequentialy, it align from 0 to the end.
var [a, b, c, d] = li;
console.log(a,b,c,d);


///////////////////////////////////////


