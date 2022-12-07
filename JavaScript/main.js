// let info =[
//     {
//         name: 'John',
//         age: 21,
//         budget: 23000
//     },
//     {
//         name: 'Steve',
//         age: 32,
//         budget: 40000
//     },
//     {
//         name: 'Martin',
//         age: 16,
//         budget: 2700
//     }
// ]

// function getBudgets(arr){
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         count +=arr[i]['budget']
//     }
//     return count
// }

// console.log(getBudgets(info));




// function testJackpot(arr){
//     let count = []
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == arr[0]){
//             count +=1
//         }
//     }
//     return count == 
// }

// console.log(testJackpot(['@', '@', '@', '@']));





function specialReverse(param1){
    let param2 = param1.split(" ")
    let param3 = []
    for(let i=0; i<param2.length; i++){
        if(param2[i].includes("s")){
            param3 += param2[i].split("").reverse().join("") +" "
        }
        else(
            param3 +=param2[i] +" "
        )
    }
    return param3
}

console.log(specialReverse("first man to walkon salom the moon"));