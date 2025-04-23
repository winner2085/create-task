//Creates buttons to add new inventory folders and items
const newInv = document.querySelector("#btn");

//When button is clicked, it creates a new inventory folder to personalize
function show(newInv) {
    newInv.addEventListener('click', () => {
        document.getElementById("new-inv").style.display = "block";
    })
}
show(newInv);

let inputTitle = document.getElementById("input-title").value;
let inputDesc = document.getElementById("input-desc").value;
const closeBtn = document.getElementById("closeBtn");

function storeUserInput(inputTitle, inputDesc){
    closeBtn.addEventListener('click', () => {
        localStorage.setItem("User Input", inputTitle, inputDesc)
        window.location.href = "inv.html";
    });
}
storeUserInput(inputTitle, inputDesc);

if (inputTitle, inputDesc){
    document.getElementById("invTitle").textContent = inputTitle;
    document.getElementById("invTitle").textContent = inputTitle;
}

const addButton = document.querySelector("#add-button");

//When button is clicked, it creates a new item to personalize
function addItem() {
    addButton.addEventListener ('click', () => {
        document.getElementById("container").style.display = "block";
    });
}
addItem();