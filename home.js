//Creates empty inventory array
const inventory = [];

//Creates item table for organizing items
const inventoryTable = document.getElementById("user-inventory");

function addRow(itemObject) {
    const newRow = inventoryTable.insertRow();
    const nameCell = newRow.insertCell();
    const colorCell = newRow.insertCell();
    const sizeCell = newRow.insertCell();
    const quantityCell = newRow.insertCell();
    
    nameCell.textContent = itemObject.name;
    colorCell.textContent = itemObject.color;
    sizeCell.textContent = itemObject.size;
    quantityCell.textContent = itemObject.quantity;
}

function addItem() {
    const itemName = document.getElementById("item-name");
    const itemColor = document.getElementById("item-color");
    const itemSize = document.getElementById("item-size");
    const itemQuantity = document.getElementById("item-quantity");

    item = {
        name: itemName.value,
        color: itemColor.value,
        size: Number(itemSize.value),
        quantity: Number(itemQuantity.value)
    }

    inventory.push(item);
    addRow(item);
}

function sortList(sortByX) {
    const length = inventory.length;
    let swapped = false;
    do {
        swapped = false;
        
        for (let i = 1; i<= length - 1; i = i++) {
            let previousItem = inventory[i - 1];
            let currentItem = inventory[i];

            if (sortByX === "name") {
                if (previousItem.name > currentItem.name) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            } else if (sortByX === "color") {
                if (previousItem.color > currentItem.color) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            } else if (sortByX === "size") {
                if (previousItem.size > currentItem.size) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            } else if (sortByX === "quantity") {
                if (previousItem.quantity > currentItem.quantity) {
                    inventory[i - 1] = currentItem;
                    inventory[i] = previousItem;
                    swapped = true;
                }
            }
        }
    } while (swapped === true);
}

inventoryTable.innerHTML = "";
for (let i = 0; i<= length - 1; i = i++) {
    addRow(inventory[i]);
}