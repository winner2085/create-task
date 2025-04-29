//Defines the page titles
let pageTitle1 = "Home Page";
let pageTitle2 = "Your Inventories";

//Creates buttons to add new inventory folders and items


//When button is clicked, it creates a new inventory folder to personalize
function createInv() {
    const newInvBtn = document.getElementById("btn");
    newInvBtn.addEventListener('click', () => {
        document.getElementById("new-inv").style.display = "block";
    });
}

document.addEventListener('DOMContentLoaded', () => {
//Defines the input fields for the inventory title and description
const inputTitle = document.getElementById("inTit");
const inputDesc = document.getElementById("inDesc");
const closeBtn = document.getElementById("closeBtn");

//Locally stores the user input and redirects to the inventory page
function storeUserInput(inputTitle, inputDesc){
    closeBtn.addEventListener('click', () => {
        const userInput = {
            title: inputTitle.value,
            description: inputDesc.value
        }
        console.log(userInput)
        localStorage.setItem("UserInput", JSON.stringify(userInput));
        window.location.href = "inv.html";
    });
}

//Retrieves the stored user input and displays it on the inventory page
const storedInput = localStorage.getItem("UserInput");
console.log(storedInput);
if (storedInput){
    console.log(inputUser);
    const inputUser = JSON.parse(storedInput);

    document.getElementById("inTit").textContent = inputUser.title;
    document.getElementById("inDesc").textContent = inputUser.description;
}
});

//Defines the button to add items to the inventory
const addButton = document.getElementById("add-button");

//When button is clicked, it creates a new item to personalize
function addItem() {
    addButton.addEventListener('click', () => {
        document.getElementById("container").style.display = "block";
    });
}

//Checks which page the user is on and executes the corresponding function
if(pageTitle1 === "Home Page"){
    createInv();
    storeUserInput(inputTitle, inputDesc);
} else if (pageTitle2 === "Your Inventories") {
    addItem();
}