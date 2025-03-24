// example 1 without higher-order function

// var numbers = [1,2,3];

// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
    
// }

// console.log(result);

//<-- example 1 with higher-order function -->

var numbers = [1,2,3,4];

var result = numbers.map(function(number){
    return number * 2;
})

console.log(result);

//<-- example 1 with higher-order function shortage way by arrow function -->

// var numbers = [1,2,3];

// var result = numbers.map((number)=>number*2);
// console.log(result);

 //<-- example 2 with higher-order function shortage way by arrow function -->

//  var players = [
//     {
//         name:'Sakib',
//         avg:34.5
//     },
//     {
//         name:'mash',
//         avg:37.5
//     },
//     {
//         name:'tamim',
//         avg:38.5
//     }
//  ]

// //  const playersWithAvgThirtySeven = [];

//  const result = players.filter((player)=>player.avg >= 37);

//  console.log(result);


 //<-- example 3 with higher-order built in method array.map -->

//  const language = ["JavaScript","Java","Python"]

//  function mapShahin(arr,fn) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push (fn(arr[i]));
        
//     }
//     return newArray;
//  }

//  const myArray = mapShahin = mapShahin(language,function (language) {
//     return language.length;
//  });

//  console.log(myArray);


// Best Practice

//  const language = ["JavaScript","Java", "pyhton"];

//  function mapShahin(arr,fn) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i]));
        
//     }
//     return newArray;
//  }

//  const myArray = mapShahin(language,function(language){
//     return language.length;
//  })
//  console.log(myArray)