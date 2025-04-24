if(page.title === "Home Page"){
    //Creates buttons to add new inventory folders and items
    const newInvBtn = document.getElementById("btn");

    //When button is clicked, it creates a new inventory folder to personalize
    function createInv() {
        newInvBtn.addEventListener('click', () => {
            document.getElementById("new-inv").style.display = "block";
        })
    }

    let inputTitle = document.getElementById("inTit").value;
    let inputDesc = document.getElementById("inDesc").value;
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
}  else if (page.title === "Your Inventories") {
    //Creates buttons to add new inventory items

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
}
