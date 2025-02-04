const myLibrary = [];
function Library() {


  const Title = document.getElementById("title");
const Author = document.getElementById("author");
const Pages = document.getElementById("pages");
const Genre = document.getElementById("genre");
const New = document.querySelector(".New")

function Books(title, author, pages, genre){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;


}

function  addBookToLibrary(){
  let tit = Title.value;
  let aut = Author.value;
  let pag = Pages.value;
  let gen = Genre.value;

  if((tit.length >  0) && (aut.length > 0) && (pag > 0)){
    event.preventDefault();
let Pushed = new Books(tit, aut, pag, gen);
myLibrary.push(Pushed)

console.log(myLibrary)
let newDiv = document.createElement("div");
let nameT = document.createElement("p");
let nameA = document.createElement("p");
let nameP = document.createElement("p");
let nameG = document.createElement("p");
let finalB = document.createElement("button");
finalB.textContent = "Delete";
finalB.style.fontSize = "x-large";
finalB.style.padding = "2%";
finalB.style.backgroundColor = "crimson";
finalB.style.color = "white"
finalB.style.borderRadius = "50%";

finalB.addEventListener("click",Clicked);
function Clicked() {
  newDiv.remove();
}


document.getElementById("Form").reset()
nameT.textContent = `Title: ${tit}`;
nameA.textContent = `Author: ${aut}`;
nameP.textContent = `No of pages: ${pag}`;
nameG.textContent = `Genre: ${gen}`;
newDiv.appendChild(nameT);
newDiv.appendChild(nameA);
newDiv.appendChild(nameP);
newDiv.appendChild(nameG);
newDiv.appendChild(finalB);
New.appendChild(newDiv);

  } else {
    alert("Complete the form")
    event.preventDefault();
  }
  

  
}

Books();
addBookToLibrary();


}

