//Defines the page titles
let pageTitle1 = "Home Page";
let pageTitle2 = "Your Inventories";

//Creates buttons to add new inventory folders and items
const newInvBtn = document.getElementById("btn");

//When button is clicked, it creates a new inventory folder to personalize
function createInv(newInvBtn) {
    newInvBtn.addEventListener('click', () => {
        document.getElementById("new-inv").style.display = "block";
    });
}

//Defines the input fields for the inventory title and description
let inputTitle = document.getElementById("inTit").value;
let inputDesc = document.getElementById("inDesc").value;
const closeBtn = document.getElementById("closeBtn");

//Locally stores the user input and redirects to the inventory page
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

//Retrieves the stored user input and displays it on the inventory page
const storedInput = localStorage.getItem("UserInput");
if (storedInput){
    const userInput = JSON.parse(storedInput);

    document.getElementById("invTitle").textContent = userInput.title;
    document.getElementById("invDesc").textContent = userInput.description;
}

//Defines the button to add items to the inventory
const addButton = document.getElementById("add-button");

//When button is clicked, it creates a new item to personalize
function addItem() {
    addButton.addEventListener('click', () => {
        document.getElementById("container").style.display = "block";
    });
}   
addItem();

//Checks which page the user is on and executes the corresponding function
if(pageTitle1 === "Home Page"){
    createInv(newInvBtn);
    storeUserInput(inputTitle, inputDesc);

} else if (pageTitle2 === "Your Inventories") {
    addItem();
}