function allDataLoad() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
}

const displayData = (btnData) => {
  const learnBtns = document.getElementById("learnBtns");

  btnData.forEach((btn) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<button class="btn hover:bg-[#422AD5] hover:text-white">Lesson-${btn.level_no}</button>  `;
    learnBtns.append(newDiv);
  });
};

const singleDataLoad = (singleBtn) => {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((response) => response.json())
    .then((data) => singleData(data.data));
};

const singleData = (btnData) => {
  const cardsContainer = document.getElementById("lessonCard");
  for (let i = 0; i < btnData.length; i++) {
    console.log(btnData[i]);
    const createElement = document.createElement("div");
   
    createElement.innerHTML = `<div class="card">
  <div class="card-body bg-slate-300 rounded-md mt-6 items-center text-center">
    <h2 class="card-title">${btnData[i].word}</h2>
    <p>${btnData[i].meaning} / ${btnData[i].pronunciation}</p>
    <div>
      <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn"><i class="fa-solid fa-volume-low"></i></button>
    </div>
  </div>
</div>
  `;
    cardsContainer.append(createElement);
  }
};

singleDataLoad();
allDataLoad();
