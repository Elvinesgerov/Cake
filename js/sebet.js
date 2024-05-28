let main = document.querySelector("main");
let mainH1 = document.querySelector("main h1");
let body = document.querySelector("body");
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let total = document.createElement("div");
let snow = document.querySelector('#snow')
let darkMood = document.querySelector('.darkmood');
let headerContainer = document.querySelector('.header_container')
let totalAmount = 0;
let flag = true;
let snowNumber = 80;

total.classList.add("total");
body.appendChild(total);

function updateTotal() {
 total.innerHTML = `Total: ${totalAmount} Azn`;
}

function updateLocalStorage() {
 localStorage.setItem("basket", JSON.stringify(basket));
}

basket.forEach((pruduct, index) => {
 let containerDiv = document.createElement("div");
 containerDiv.classList.add("container");
 let sum = 0;
 sum = sum + main.children.length;
 let p = document.createElement("p");
 let number = pruduct.count || 1;
 let c = pruduct.prize * number;
 p.innerText = `${number} ədəd x ${pruduct.name} — ${c} Azn`;
 totalAmount += c;
 updateTotal();
 mainH1.innerHTML = `The Number of Product(${sum})`;
 let divButton = document.createElement("div");
 divButton.classList.add("button");
 let button1 = document.createElement("button");
 button1.innerText = "+";
 let button2 = document.createElement("button");
 button2.innerText = "-";
 let button3 = document.createElement("button");
 button3.innerText = "X";

 containerDiv.appendChild(p);
 containerDiv.appendChild(divButton);
 divButton.appendChild(button1);
 divButton.appendChild(button2);
 divButton.appendChild(button3);
 main.appendChild(containerDiv);

 button1.addEventListener("click", () => {
  number++;
  pruduct.count = number;
  c = pruduct.prize * number;
  p.innerText = `${number} ədəd x ${pruduct.name} — ${c} Azn`;
  totalAmount += pruduct.prize;
  updateTotal();
  updateLocalStorage();
 });

 button2.addEventListener("click", () => {
  if (number > 1) {
   number--;
   pruduct.count = number;
   c = pruduct.prize * number;
   p.innerText = `${number} ədəd x ${pruduct.name} — ${c} Azn`;
   totalAmount -= pruduct.prize;
   updateTotal();
   updateLocalStorage();
  }
 });

 button3.addEventListener("click", () => {
  totalAmount -= pruduct.prize * number;
  updateTotal();
  basket.splice(index, 1);
  updateLocalStorage();
  containerDiv.remove();
 });
});

updateTotal();
updateLocalStorage();


function createSnow() {
 let div = document.createElement('div');
 div.classList.add('snow');
 div.innerHTML = '❆';
 div.style.left = `${Math.random() * 90}vw`
 div.style.animationDuration = `${10}s`
 div.style.fontSize = `${1.2}em`
 div.style.color = "red";

 snow.appendChild(div)
 div.addEventListener('animationend', () => {
  div.remove();
  createSnow();
 })
}

for (let i = 0; i < snowNumber; i++) {
 setTimeout(createSnow, i * 200);
}

darkMood.addEventListener('click', () => {
 if (flag == true) {
  darkMood.style.backgroundColor = "black";
  darkMood.style.color = "white"
  darkMood.style.boxShadow = "10px 5px 5px brown"
  headerContainer.style.backgroundColor = "black"
  body.style.backgroundColor = "rgb(35, 35, 35)"
  main.style.color = "white"
  body.style.color = "white"
  flag = false
 } else if (flag == false) {
  darkMood.style.backgroundColor = "white"
  darkMood.style.color = "black"
  darkMood.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
  headerContainer.style.backgroundColor = "#540d0d"
  body.style.backgroundColor = "white"
  body.style.color = "black"
  main.style.color = "black"
  flag = true
 }
})

window.onscroll = function () {
 let goToTopButton = document.querySelector('#goToTopButton');

 if (window.scrollY > 1000) {
  goToTopButton.style.display = 'flex';
 } else {
  goToTopButton.style.display = 'none';
 }
};

function goToTop() {
 let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

 if (currentScroll > 0) {
  window.scrollTo(0, currentScroll - 30);
  setTimeout(goToTop, 10);
 }
}