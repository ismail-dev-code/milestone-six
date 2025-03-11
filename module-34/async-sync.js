const loadData = async () => {
 try{
    console.log("ami prothom");
    console.log("ami second");
  
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log(data);
    const result = 45 + 2;
    console.log(result);
    console.log("ami fourth");
 }
 catch{
    console.log("error dice");
 }

  //   setTimeout(() => {
  //     console.log("ami set time out");
  //   }, 2000);
  //   fetch("https://jsonplaceholder.typicode.com/albums")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

};
loadData();

async function fetchData() {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await resonse.json();
  console.log(data);
}
fetchData();
