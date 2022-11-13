// in the js browser
var input = prompt();

// 'input' is consider as True if it is not empty string
// (!input) = (input == '')
if (!input){ // empty string '' = False
    console.log("no input")
}else{
console.log(input);}

//function
function add(a,b){
    return a + b;
}
//lambda function
const add2 = (a,b) => a + b;

console.log(add2(1,2));