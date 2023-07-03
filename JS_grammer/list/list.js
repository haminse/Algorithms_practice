// how to change css property in js
document.getElementById('lion').style.color = 'red';  
document.getElementsByTagName('li')[1].style.color = 'blue';  

document.querySelectorAll(".bear")[0].style.color = "red"; // selector all => array type


// change html string in js
document.querySelectorAll(".bear")[0].innerHTML= "dogs";

// add another tag + content with js
const animals = document.getElementById('lion');
animals.innerHTML += "<li class = 'animal'>cat</li>";

// make new css class in object
document.querySelectorAll(".box")[0].classList.add('purple');

// remove css class in obj
document.querySelectorAll(".box")[0].classList.remove('purple');

//toggle -> if class exists ? del : add (always reverse) 
document.querySelectorAll(".box")[0].classList.toggle("yellow");
document.querySelectorAll(".box")[0].classList.toggle("yellow");


///////// Listner //////////////

// document.getElementById("btn").addEventListner("click", function (){
//     console.log("click!!!!!!");
// });


/// plus minus button
var num = 0;


//listner : set function when clcik the button.
document.getElementById("btn_plus").addEventListener("click", function(){
    num++;
    document.getElementById("num").innerHTML = num

});

document.getElementById("btn_minus").addEventListener("click", function(){
    // set the min value of the num
    if(num <= 0){num++;}
    num--;
    document.getElementById("num").innerHTML = num

});


//// appear the newbar when click the bar
document.querySelector(".bar").addEventListener("click", function(){
    if(document.querySelector(".newbar").style.display == "none"){
        document.querySelector(".bar").innerHTML = "CLICKED!";
        document.querySelector(".newbar").style.display = "block";
    }else{
        document.querySelector(".bar").innerHTML = "click here";
        document.querySelector(".newbar").style.display = "none";
    }

});

//other way : use classList.toggle
// document.querySelector(".bar").addEventListener("click", function(){
//         document.querySelector(".bar").innerHTML = "CLICKED!";
//         document.querySelector(".newbar").classList.toggle("show");
// });




