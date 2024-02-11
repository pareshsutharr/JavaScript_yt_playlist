// let arr = [12,33,344,222,22];

// // let arr2 = arr.map((value , index , array)=>{
// //     // return value + index;
// //     console.log(value , index , array)
// // })
// // console.log(arr2)


// let arr = [1,3,56,432,2244,3];

// let arr1 = arr.filter((element)=>{
//     return element < 10;
// })

// console.log(arr)
// console.log(arr1)


let arr = [1,2,3,4,5];

let arr1 = arr.reduce((element,element1)=>{
    return element + element1;
})

console.log(arr1)

let companys = ["google","tcs","microsoft"];

let arr2 = companys.filter((word)=>{return word.length<5});

console.log(arr2)