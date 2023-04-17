function mergeSort(array){
if(array.length <=1){
    return array
}
let middle =math.floor(array.length/2);
let leftindex=array.slice(0,middle);

let rightindex=array.slice(middle);
return merge(mergeSort(leftindex),mergeSort(rightindex));
// return divideArray(left and right)


// Recurrsion function calls itself
// mergeSort- check if the array exists
// empty array.push(left.shift)
// empty array.push(left.shift)

//empty array
}
function merge(leftindex,rightindex){
    let array=[];
    while(leftindex.length && rightindex.length){
        if (leftindex[0]<rightindex[0]){
            array.push(leftindex.shift());
        }else{
            array.push(rightindex.shift());
        }
    }
    return[...array,...leftindex,...rightindex];
}

function find(arr,target){
    let leftindex=0;
    let rightindex=arr.length-1;
    
    while (leftindex<=rightindex){
     let middle =Math.floor((leftindex+rightindex)/2);
     if (arr[middle] ===target   ){
        return middle;
     }
     else if(arr[middle]>target){ 
        rightindex=middle-1;

     }
     else{
        leftindex=middle+1;
     }

    }
    return null;
    
}
let num=[45,12,6,89,2,5]
let target=6
console.log(find(num,target))

function mergeSort(arr2){
    if(arr2.length<=1){
        return arr2;
    }

let middle =Math.floor(arr2.length/2);
let leftindex=arr2.slice(0,middle);
let rightindex=arr2.slice(middle);
return merge(mergeSort(leftindex),mergeSort(rightindex));

}
function merge(leftindex,rightindex){
    let result=[];
    while (leftindex.length && rightindex.length){
        if(leftindex[0] >=rightindex[0]){
            result.push(leftindex.shift());

        }else{
            result.push(rightindex.shift());
        }
    }
    
return[...result,...leftindex,rightindex];
}
let arr2 =[123,89,5,23,9,56]
arr2= mergeSort(arr2);
console.log(arr2);
  




function mergeSort(arr3){
    if(arr3.length <=1){
        return arr3
    }
    let middle =Math.floor(arr3.length/2);
    let leftindex=arr3.slice(0,middle);
    let rightindex=arr3.slice(middle);
    return merge(mergeSort(leftindex),mergeSort(rightindex));
    
    
    }
    function merge(leftindex,rightindex){
        let arr3=[];
        while(leftindex.length && rightindex.length){
            if (leftindex[0]<rightindex[0]){
                arr3.push(leftindex.shift());
            }else{
                arr3.push(rightindex.shift());
            }
        }
        return[...arr3,...leftindex,...rightindex];
    }
    
    function get(arr3,target3){
        let leftindex=0;
        let rightindex=arr3.length-1;
        
        while (leftindex<=rightindex){
         let middle =Math.floor((leftindex+rightindex)/2);
         if (arr3[middle] ===target3  ){
            return middle;
         }
         else if(arr3[middle]>target3){ 
            rightindex=middle-1;
    
         }
         else{
            leftindex=middle+1;
         }
    
        }
        return null;
        
    }
    let arr3=[1,4,78,2,67,3]
    let target3=34
    console.log(get(arr3,target3))


    // divide the lenght 
    // let middle=math.floo
    
