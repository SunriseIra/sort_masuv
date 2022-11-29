const allGroup = [
  {
    group: "metal",
    title: "metal-1",
  },
  {
    group: "wood",
    title: "wood-1",
  },
  {
    group: "pepper",
    title: "pep-1",
  },
  {
    group: "water",
    title: "wat-1",
  },
  {
    group: "pepper",
    title: "pep-2",
  },
  {
    group: "pepper",
    title: "pep-3",
  },
  {
    group: "water",
    title: "wat-2",
  },
  {
    group: "wood",
    title: "wood-2",
  },
  {
    group: "metal",
    title: "metal-2",
  },
  {
    group: "metal",
    title: "metal-3",
  },
  {
    group: "wood",
    title: "wood-3",
  },
  {
    group: "pepper",
    title: "pep-4",
  },
  {
    group: "wood",
    title: "wood-4",
  },
  {
    group: "water",
    title: "wat-3",
  },
  {
    group: "water",
    title: "wat-4",
  },
  {
    group: "wood",
    title: "wood-5",
  },
];

// console.log(allGroup);

function myBtn() {
  const newElem = [];
  allGroup.forEach(createBtnEl);

  function createBtnEl(elem) {
    if (!newElem.includes(elem.group)) {
      newElem.push(elem.group);
    }
  }
  return newElem;
}

const buttonn = myBtn();
// console.log(buttonn);

if (buttonn.length) {
  //   console.log(buttonn.length);
  let body = document.getElementsByTagName("body")[0];

  let divBtn = document.createElement("div");
  body.appendChild(divBtn);
  divBtn.classList.add("divBtn");
  let butnAll = document.createElement("button");
  butnAll.innerText = "All";
  divBtn.appendChild(butnAll);
  butnAll.classList.add("butnAll");
  let divCard = document.createElement("div");
  body.appendChild(divCard);
  divCard.classList.add("divCard");
}

////////////
let divButn = document.querySelector(".divBtn");
let divCcard = document.querySelector(".divCard");

buttonn.forEach((elem) => {
  let butnEl = document.createElement("button");
  butnEl.innerText = elem;
  // butnEl.dataset.name = elem;
  butnEl.classList.add("butnEl");
  divButn.appendChild(butnEl);
  switch (elem) {
    case "metal":
      butnEl.style.backgroundColor = "#22a6b3";
      butnEl.dataset.name = elem;
      break;
    case "wood":
      butnEl.style.backgroundColor = "#f0932b";
      butnEl.dataset.name = elem;
      break;
    case "water":
      butnEl.style.backgroundColor = "#6ab04c";
      butnEl.dataset.name = elem;
      break;
    case "pepper":
      butnEl.style.backgroundColor = "#be2edd";
      butnEl.dataset.name = elem;
      break;
  }
  // console.log(butnEl);
});

/////////створили карточки

function myCard() {
  // const newAr = [];
  allGroup.forEach((elem) => {
    let card = document.createElement("card");
    card.innerText = elem.title;
    card.classList.add("cardEl");
    divCcard.appendChild(card);
    card.dataset.name = elem.group;
    card.classList.add("notActive");
    switch (elem.group) {
      case "metal":
        card.style.backgroundColor = "#22a6b3";
        break;
      case "wood":
        card.style.backgroundColor = "#f0932b";
        break;
      case "water":
        card.style.backgroundColor = "#6ab04c";
        break;
      case "pepper":
        card.style.backgroundColor = "#be2edd";
        break;
    }
  });
  return allGroup;
}
let allCard = myCard();
// console.log(allCard);

/////вивід карточок при натисканні на all

let butnAll = document.querySelector(".butnAll");
butnAll.addEventListener("click", function () {
  let allcard = document.querySelectorAll(".cardEl");
  let allCardArr = Array.from(allcard);
  console.log(allCardArr);

  allCardArr.forEach((elem) => {
    elem.classList.add("active");
  });
  // allCardArr.classList.add("Active");
  // divCcard.appendChild(allCardArr);
});

///////////

// console.log(buttonn);
let butnEl = document.querySelectorAll(".butnEl");
let butnElArr = Array.from(butnEl);
// console.log(butnElArr);

butnElArr.forEach((elem) => {
  elem.addEventListener("click", function () {
    let thisButn = this.dataset;
    // console.log(thisButn);

    let allcard = document.querySelectorAll(".cardEl");
    let allCardArr = Array.from(allcard);
    // console.log(allCardArr);

    allCardArr.forEach((card) => {
      // console.log(card.dataset.name);
      // console.log(this.dataset.name);
      // console.log(card.dataset === this.dataset);


      if (card.dataset.name === this.dataset.name) {
        console.log(1111);
       card.classList.add("active");
      } else {
        card.classList.remove("active");

      }
    });
  });
});
