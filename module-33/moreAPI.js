const moreDataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const userContainer = document.getElementById("users");
 for (let i = 0; i < user.length; i++) {
    let li = document.createElement("li");
    li.innerText = user[i].name;
    userContainer.appendChild(li);
  }
};
