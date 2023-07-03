// Example 3: Given two sorted integer arrays, 
// return an array that combines both of them 
// and is also sorted.

var combine = function(arr1, arr2) {
    let result = [];
    let p1 = 0, p2 = 0;

    while(p1 < arr1.length && p2 < arr2.length){

        if(arr1[p1] < arr2[p2]){
            result.push(arr1[p1]);
            p1++;

        }
        else{
            result.push(arr2[p2]);
            p2++;
        }
    }

    //one of loop will pass
    while(p1 < arr1.length){
        result.push(arr1[p1])
        p1++;
    }

    while(p1 < arr2.length){
        result.push(arr2[p2])
        p2++;
    }
    return result;
}


console.log(combine([1,4,7,20,38],[3,5,6,17]));

