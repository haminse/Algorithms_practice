//if click the first list element(dragon)//
// document.querySelectorAll('.tab-button')[0].addEventListener("click", function(){
    
//     //remove all the here class in tab-button
//     document.querySelectorAll('.tab-button')[0].classList.remove('here');
//     document.querySelectorAll('.tab-button')[1].classList.remove('here');
//     document.querySelectorAll('.tab-button')[2].classList.remove('here');
    
//     //remove all the show class in tab-content
//     document.querySelectorAll('.tab-content')[0].classList.remove('show');
//     document.querySelectorAll('.tab-content')[1].classList.remove('show');
//     document.querySelectorAll('.tab-content')[2].classList.remove('show');
    
//     //show the first button and tab
//     document.querySelectorAll('.tab-button')[0].classList.add('here');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');

// });


//with for statement//
// document.querySelectorAll('.tab-button')[0].addEventListener("click", function(){
    
//     //remove all the here class in tab-button and show class in tab-content
//     for(let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
//         document.querySelectorAll('.tab-button')[i].classList.remove('here');
//         document.querySelectorAll('.tab-content')[i].classList.remove('show');
//     };

//     //show the first button and tab
//     document.querySelectorAll('.tab-button')[0].classList.add('here');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// });

//with data id & event obj 'e'//

// warp with function
function tabBtn(a){ //a : 0,1,2 - each id num
    document.querySelectorAll('.tab-button')[a].addEventListener("click", function(){
    
    //remove all the here class in tab-button and show class in tab-content
    for(let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
        document.querySelectorAll('.tab-button')[i].classList.remove('here');
        document.querySelectorAll('.tab-content')[i].classList.remove('show');
    };

    //show the first button and tab
    document.querySelectorAll('.tab-button')[a].classList.add('here');
    document.querySelectorAll('.tab-content')[a].classList.add('show');
    });
}

//link click and function
document.querySelectorAll('.list')[0].addEventListener("click", function(e){
    tabBtn(e.target.dataset.id); // have no idea what is this,,
})