let nav = document.querySelector(".nav-bar");
let arrow = document.querySelector(".nav-bar .arrow");
let taps = document.querySelectorAll(".nav-bar h3");
let icons = document.querySelectorAll("svg:not(.arr)");
let over = document.querySelector(".over");
let remin = document.querySelector(".reminder");
let quesBoxes = document.querySelectorAll(".ques-box");
let riArr = document.querySelectorAll(".right-arrow");
let inp = document.querySelector(".tem-num");
let anses = document.querySelector(".anses");
let smell = document.querySelector(".smell-box");
let lastUpdate = document.querySelector(".statistics > p span");
let covid = document.querySelectorAll(".statistics article h2 ");
let articles = document.querySelectorAll(".statistics article");
let colors = [
  "#4bcb64",
  "#2196f3",
  "#d92626",
  "#4bcb64",
  "#2196f3",
  "#d92626",
  "#4bcb64",
  "#2196f3",
  "#d92626",
];
let lis = document.querySelectorAll(".rep-taps li");
let lisArray = Array.from(lis);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

//============================================================\\
articles.forEach((ele, i) => {
  ele.style.backgroundColor = colors[i];
});
//============================================================\\

// create arrow button in nav-bar
arrow.onclick = () => {
  nav.classList.toggle("active");
  //============================================================\\
}
  let rem = setTimeout(function () {
    over.style.display = "block";
    remin.style.display = "flex";
    over.onclick = function () {
      over.style.display = "none";
      remin.style.display = "none";
    };
  }, 8000);
// riArr.forEach(aro => {
//   aro.onclick = function(){
//     console.log("clicked")
//     for(let i = 0 ;i <quesBoxes.length; i++){
//       quesBoxes[i].style.display ="none"
//       quesBoxes[i += 1].style.display ="flex"
//     }
//   }
// function showGrid(){
//   anses.style.display ="grid";
// }
// })
//============================================================\\
for (let i = 0; i < riArr.length; i++) {
  riArr[i].onclick = function () {
    quesBoxes[i].style.display = "none";
    if (quesBoxes[i].classList.contains("smell-box") === true) {
      anses.style.display = "grid";
    }
    console.log(quesBoxes[i]);
    quesBoxes[i + 1].style.display = "flex";
    // if(riArr.slice(-1).pop() === riArr[i]){

    // }
  };
}

// let aft = window.getComputedStyle(document.querySelector(".ques-box"), ":after");
// aft.onclick =function(){
//   console.log("clicked")
// }
//============================================================\\
fetch("https://disease.sh/v3/covid-19/all")
  .then((res) => res.json())
  .then((data) => {
    covid[0].innerHTML = data.cases;
    covid[1].innerHTML = data.recovered;
    covid[2].innerHTML = data.deaths;
    covid[3].innerHTML = data.todayCases;
    covid[4].innerHTML = data.todayRecovered;
    covid[5].innerHTML = data.todayDeaths;
    covid[6].innerHTML = (data.casesPerOneMillion / 10000).toFixed(3) + "%";
    covid[7].innerHTML = (data.recoveredPerOneMillion / 10000).toFixed(3) + "%";
    covid[8].innerHTML = (data.deathsPerOneMillion / 10000).toFixed(3) + "%";
    lastUpdate.innerHTML = Date(data.updated);
    console.log(data);
  });
//============================================================\\


// reports taps
lisArray.forEach((ele) => {
  ele.addEventListener("click" , function(e){
lisArray.forEach((ele) => {
  ele.classList.remove("rep-active");
});
e.currentTarget.classList.add("rep-active");
divsArray.forEach((div) => {
  div.style.display= "none"
});
document.querySelector(e.currentTarget.dataset.cont).style.display ="block"
  })
})