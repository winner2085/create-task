//Creates empty inventory array
const inventory = [];

//Creates item table for organizing items
const inventoryTable = document.getElementById("user-inventory");

//Creates a new row for the table when an item is added
function addRow(itemObject) {
    const newRow = inventoryTable.insertRow();
    const nameCell = newRow.insertCell();
    const colorCell = newRow.insertCell();
    const sizeCell = newRow.insertCell();
    const quantityCell = newRow.insertCell();
    
    //Organizes the table by name, color, size, and quantity
    nameCell.textContent = itemObject.name;
    colorCell.textContent = itemObject.color;
    sizeCell.textContent = itemObject.size;
    quantityCell.textContent = itemObject.quantity;
}

//Adds an item to the inventory
function addItem() {
    const itemName = document.getElementById("item-name");
    const itemColor = document.getElementById("item-color");
    const itemSize = document.getElementById("item-size");
    const itemQuantity = document.getElementById("item-quantity");

    //Checks if the item values are empty
    item = {
        name: itemName.value,
        color: itemColor.value,
        size: Number(itemSize.value),
        quantity: Number(itemQuantity.value)
    }

    //Pushes the item to the inventory array
    inventory.push(item);
    //Calls the addRow function to add the item to the table
    addRow(item);
}

//Sorts the inventory by name, size, or quantity
function sortList(sortByX) {
    const length = inventory.length;
    let swapped = false;
    do {
        swapped = false;
        //Begins the sorting process at the second item in the list
        for (let i = 1; i <= length - 1; i++) {
            //Compares the previous item to the current item
            //If the previous item is greater than the current item, swap them
            //If the previous item is less than the current item, do nothing
            let previousItem = inventory[i - 1];
            let currentItem = inventory[i];
            
            //Sorts the list by name
            if (sortByX === "name") {
                if (previousItem.name > currentItem.name) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            
                //Sorts the list by size value
            } else if (sortByX === "size") {
                if (previousItem.size > currentItem.size) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            
                //Sorts the list by quantity
            } else if (sortByX === "quantity") {
                if (previousItem.quantity > currentItem.quantity) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            }
        }
    } while (swapped === true);    //Ends the sorting process when no more swaps are made

    //Clears the table when button clicked and returns the sorted list
    inventoryTable.innerHTML = "";
        for (let i = 0; i<= length - 1; i++) {
        addRow(inventory[i]);
    }
}

//Determines the order of colors
const colorOrder = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white", "gray"];

//Sorts the inventory by color
function sortByColor() {
    inventory.sort((a, b) => {
        return colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color);
    });

    //Clears the table when button clicked and returns the sorted list
    inventoryTable.innerHTML = "";
        for (let i = 0; i<= inventory.length - 1; i++) {
        addRow(inventory[i]);
    }
}
