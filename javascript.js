// arrey creation and initilization




const score = [420, 10, 112, 102];
console.log('score=', score);



// array maping






let arr=[1,2,3,4,5]
let newarr = arr.map(x=>x*2);
console.log(newarr);




//Maximum and Minimum


let array=[1,2,3,4,5,,6,7]
let max=-234567;
let min=100000;
for(let i=0;i<array.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
    console.log("maximum num is " + max )


for(let i=0;i<array.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}    
console.log("minimum num is " +  min )




 //   reverse() & sorting()




 let arr1=[1,2,3,4,5,6,7,8]
 console.log(arr1.reverse());
 console.log(arr1.sort());

//joining 

let arr2=[2,3,4,5,6,7];
console.log(arr2.join('-'));











    
   