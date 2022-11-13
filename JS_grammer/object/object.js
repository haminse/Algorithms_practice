const me ={
    name : "minse",
    age : 24,
    sex : 'M'
}

const you  ={
    name : "minseo",
    age : 20,
    sex : 'F'
}

var Army = function(preson){
    if (preson.sex == "M"){
        preson.army = false;
    }

}

var parsebool = function(value){
    if (value == true){
        return "true";
    }else{
        return "false";
    }
}

Army(me);
Army(you);

console.log(me);
console.log(you);


//this codes are same with...
if (me.army !== undefined){
    console.log(parsebool(me.army));
}

if (you.army !== undefined){
    console.log(parsebool(me.army));
}
console.log("-----------------");
//this one!
me.army !== undefined && console.log(parsebool(me.army));
you.army !== undefined && console.log(parsebool(you.army));


