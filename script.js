const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
let bottomDiv = document.getElementById('bottom-div');


//Functions 

function menuBox(){

    console.log("Hello");
    //bottomDiv.innerText = "Hello there"
}

menuBox();





//Rules and class event handlers

rulesBtn.addEventListener('click', menuBox);
closeBtn.addEventListener('click', () => rules.classList.remove('show'));






