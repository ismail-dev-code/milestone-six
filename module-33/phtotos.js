const photosAll = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      showPhotos(data);
    });
};

const showPhotos = (photos) => {
  const photosContainer = document.getElementById("photosContainer");
  for (let photo of photos) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
                    <h2>${photo.title}</h2>      
                    <h3>${photo.url}</h3>      
                    <p>${photo.id}</p>      
        `;
    photosContainer.appendChild(div);
  }
};

// photosAll();
