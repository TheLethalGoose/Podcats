document.body.onload = addElement;

let ansichtBtn = document.createElement("button");

ansichtBtn.className = "btn";
ansichtBtn.style.minwWidth = "100px";
ansichtBtn.style.fontSize = "1em";

ansichtBtn.textContent = "Listen Ansicht";
var listenAnsicht = false;

ansichtBtn.onclick = changeView;

function addElement() {
  var main = document.querySelector("main");
  var article = document.querySelector("article");

  main.insertBefore(ansichtBtn, article);
  setBtnText();
}
function changeView() {

  if (listenAnsicht) {
    document.getElementById("kachelContainer").style.display = "flex";
    document.getElementById("podList").style.display = "none";
    ansichtBtn.textContent = "Listenansicht";
    listenAnsicht = false;

  } else {
    document.getElementById("kachelContainer").style.display = "none";
    document.getElementById("podList").style.display = "block";
    ansichtBtn.textContent = "Kachelansicht";
    listenAnsicht = true;
  }
}

