const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      showPost(data);
    });
};

const showPost = (posts) => {
  const postContainer = document.getElementById("postContainer");

  for (let post of posts) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
                <h1>${post.title}</h1>       
                <p>${post.body}</p>
                <h6>${post.id}</h6>
        `;
    postContainer.appendChild(div);
  }
};

handlePost()