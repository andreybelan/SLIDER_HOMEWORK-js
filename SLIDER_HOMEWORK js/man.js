const projects = [
{
  city: "Rostov-on-Don\n LCD admiral",
  "apartment area": "81 m2",
  "repair time": "3.5 months",
  image: "./image/slide-1.png"
},

{
  city: "Sochi\n Thieves",
  "apartment area": "105 m2",
  "repair time": "4 months",
  image: "./image/slide-2.png"
},

{
  city: "Rostov-on-Don\n Patriotic",
  "apartment area": "93 m2",
  "repair time": "3 months",
  image: "./image/slide-3.png"
}    
];

let city = [];
let area = [];
let time = [];
let image = [];


for(i = 0; i < projects.length; i++){
city[i] = projects[i].city;
area[i] = projects[i]["repair time"];
time[i] = projects[i]["apartment area"];
image[i] = projects[i].image;
}


const imageBlock = document.querySelector('.project-image');
const text = document.querySelectorAll('.present_title-text');
const menu = document.querySelectorAll('.designHeading__decision');
const page = document.querySelectorAll('.toggle-krug');


function styleMenu (index){  
  menu.forEach(function(item) {
    item.classList.remove("designHeading__decision--gold");
  });
  menu[index].classList.add("designHeading__decision--gold");
}  


function stylePage (index){
page.forEach(function(item) {
  item.classList.remove("toggle-krug__active");
});
page[index].classList.add("toggle-krug__active");
}


const createProject = (index) => {
text[0].innerText = city[index];
text[1].innerText = area[index];
text[2].innerText = time[index]; 
imageBlock.style.backgroundImage = `url(${image[index]})`;

styleMenu(index);

stylePage(index);
}

createProject(0);


const left = document.querySelector('.leftArrow');
const right = document.querySelector('.rightArrow');
 
let step = 0;


right.addEventListener('click', () => {
if(step === projects.length - 1){
 step = 0;
} else step++;


menu.forEach(function(item, index) {
  menu[index].addEventListener('click', () => {
    menu[index] == createProject(index);
  })
  });
  
  page.forEach(function(item, index){
  page[index].addEventListener('click', () => {
    page[index] == createProject(index);
  })
  })
  
createProject(step);

console.log(step);

});

left.addEventListener('click', () => {
if(step === 0){
  step = projects.length - 1;
}else step--;

createProject(step);

console.log(step);

});

