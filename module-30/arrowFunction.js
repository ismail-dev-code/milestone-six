// function sum(num1, num2){
//     return num1 + num2

// }
// sum(10, 5);

// const etaki = () => console.log("etaki");
// const test = (a, b) => a * b;
// const test2 = (a, b) => a + b;
// console.log(test(2, 5));
// const test = (a) => a * a;
// console.log(test(10));
document.getElementById("title").addEventListener("click", (event) => {
  //    if(event.target.innerText=="ES6"){
  //     console.log("ha re shotti");
  //    }
  //    else{
  //     console.log("shotti na");
  //    }

  // let body = event.target.parentElement;
  // console.log(body);
  let children = event.target.children;

  if(children.length<0){

      for(let child of children){
        
          child.style.backgroundColor = "green";
        }
  } else{
    console.log("er kono children nai");
  }
});
