

let count = 0;

const clockID = setInterval(() => {
    count = count + 1;
    console.log(count);
    if(count>=5){

        clearInterval(clockID)
    }
   
}, 3000);







// setTimeout(()=>{
//     console.log("ami setTimeOut");
// }, 3000)