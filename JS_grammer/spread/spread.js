const me ={
    name : "minse",
    age : 24,
    sex : 'M'
}

const army_me = {
    ...me, // inherit the attribute from obj 'me'
    army : false
}

console.log(army_me);


////////////////
// spread animals to animals-adv
const animals = ['dog', 'cat', 'minse'];
const animals_adv = [...animals, 'bird'];
console.log(animals_adv);


// sperad only can work in same data type
// with array , or with obj