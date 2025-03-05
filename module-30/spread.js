const friends = ["abul", "babul", "hena", "hero alom"];

const newFriends = ["bapparaj", "munshi", ...friends, "sylthei"];

// for(let i=0; i<newFriends.length; i++){
// if(!newFriends[i].includes("munshi")){
//     console.log("ei bondura valo na re");
// }
// else{
//     console.log("era valo cilo na");
// }
// console.log(...newFriends);
// }

const numbers = [13, 123, 1, 31, 43, 4, 34, 3, 24, 324, 3];
const result = Math.max(...numbers);
console.log(result);
