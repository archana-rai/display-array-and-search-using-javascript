// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;
document.getElementById("search").onkeyup = search;
let apiData = [];

getData();

function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      apiData = json;
      renderHtml(json);
    });
}

function getCard(obj) {
  const card = `<div class="card">
                  <span><b>Title:</b> ${obj.title} </span>
                  <span><b>Id:</b> ${obj.id} </span>
                  <span><b>Description:</b>  ${obj.body} </span>
              </div> <br>`;
  return card;
}

function getCardList(dataList) {
  let cardList = "";
  dataList.forEach(data => {
    cardList += getCard(data);
  });
  return cardList;
}

function renderHtml(data) {
  const cardList = getCardList(data);
  appDiv.innerHTML = cardList;
}

function search() {
  const searchQuery = document.getElementById("search").value;
  if (searchQuery.length) {
    const modifiedList = apiData.filter(data => data.id == searchQuery);
    renderHtml(modifiedList);
  } else {
    renderHtml(apiData);
  }
}
