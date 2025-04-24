
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
        const userInput = {
            title: inputTitle,
            description: inputDesc
        }
        console.log(userInput)
        localStorage.setItem("UserInput", JSON.stringify(userInput));
        window.location.href = "inv.html";
    });
}
storeUserInput(inputTitle, inputDesc);

const storedInput = localStorage.getItem("UserInput");

if (storedInput){
    const userInput = JSON.parse(storedInput);

    document.getElementById("invTitle").textContent = userInput.title;
    document.getElementById("invDesc").textContent = userInput.description;
}

const addButton = document.getElementById("add-button");

//When button is clicked, it creates a new item to personalize
function addItem() {
    addButton.addEventListener ('click', () => {
        document.getElementById("container").style.display = "block";
    });
}
addItem();