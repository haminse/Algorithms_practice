// in obj
const me ={
    name : "minse",
    age : 24,
    army : false
}

const {army, ...another} = me; //destructuring statements

console.log(another); // { name: 'minse', age: 24 }


// in array
const arr = [0,1,2,3,4,5,6];
const [zero, one, ...rest] = arr; 

console.log(zero); 
console.log(one); 
console.log(rest); // [ 2, 3, 4, 5, 6 ]