const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray =[];
// for(let i =0; i<numbers.length; i++){
//     const singleArray = numbers[i];
//     const arrayElement = singleArray + 1;
//     newArray.push(arrayElement);
// }
// console.log(newArray);

// const newArray = numbers.map((Element) => Element * 3);
// console.log(newArray);
// const newArray = numbers.map(Element=>{
//     return Element + 5;
// })
// console.log(newArray);
const friends = ["abul", "babul", "hero alom", "hena"];

const newFriends = friends.map((Element, index)=> {
    console.log(index);
    console.log(Element);
})