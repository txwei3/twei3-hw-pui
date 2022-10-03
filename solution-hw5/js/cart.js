class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

}



const originalRoll = new Roll ("Original", "Sugar Milk", 1, 2.49);
const walnutRoll = new Roll ("Walnut", "Vanilla Milk", 12, 3.49);
const raisinRoll = new Roll ("Raisin", "sugar Milk Milk", 3, 2.99);
const appleRoll = new Roll ("Apple", "Original", 3, 3.49);


let cart = [originalRoll, walnutRoll, raisinRoll, appleRoll];

//creating nested dom elements
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild


let totalMoney = 0;

function updateCart() {

    for (i = 0; i < cart.length; i++) {

        //create item container which holds everything
        const itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "item");


        //create shopping-cart class as a child of item
        const shoppingCart = itemContainer.appendChild(document.createElement("div"));
        shoppingCart.setAttribute("class", "shopping-cart");



        //create cart-item class as a child of shopping-cart
        const cartItem = shoppingCart.appendChild(document.createElement("div"));
        cartItem.setAttribute("class", "cart-item");

        //create picture and remove-btn as a child of cart-item
        const picture = cartItem.appendChild(document.createElement("div"));
        picture.setAttribute("class", "picture");


        //create img as a child of picture
        const img = picture.appendChild(document.createElement("img"));

        const removeBtn = cartItem.appendChild(document.createElement("button"));
        removeBtn.setAttribute("id", "remove-btn");
        removeBtn.addEventListener("click", removeItem)
        removeBtn.textContent = "Remove";


        //create image
        img.src = './HW1-assets/products/' + cart[i].type.toLowerCase() + "-cinnamon-roll.jpg"
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("alt", cart[i].type.toLowerCase() + " cinnamon roll");
        img.setAttribute("class", "cart-menu-item");


        //creating div for all required text
        const descriptionDiv = itemContainer.appendChild(document.createElement("div"));
        descriptionDiv.setAttribute("class", "description-in-cart");

        //creating div for name, glazetype, packsize
        const descriptions = descriptionDiv.appendChild(document.createElement("div"));
        descriptions.setAttribute("class", "descriptions");
        const name = descriptions.appendChild(document.createElement("p"));
        name.setAttribute("class", "name-in-cart");
        const glazeType = descriptions.appendChild(document.createElement("p"));
        glazeType.setAttribute("class", "glazing-type");
        const packSize = descriptions.appendChild(document.createElement("p"));
        packSize.setAttribute("class", "pack-size-in-cart");

        //creating div for price
        const displayPrice = descriptionDiv.appendChild(document.createElement("div"));
        displayPrice.setAttribute("class", "price-in-cart");
        const displayItemPrice = displayPrice.appendChild(document.createElement("p"));


        //setting content for name, glazetype, packsize and itemprice
        name.textContent = cart[i].type + " Cinnamon Roll"
        glazeType.textContent = "Glazing: " + cart[i].glazing;
        packSize.textContent = "Pack Size: "+ cart[i].size;
        displayItemPrice.textContent = "$" + cart[i].size * cart[i].basePrice


        //adding everything to the flex-container
        document.getElementById("flex-container-cart").appendChild(itemContainer);

        //update total cost
        totalMoney += cart[i].size * cart[i].basePrice

    }

    document.getElementById("money").textContent = "$" + totalMoney;
}


updateCart()


//remove parent from child element
//https://bobbyhadz.com/blog/javascript-remove-parent-element


function removeItem() {

    //find the parent of the remove-btn clicked
    console.log(this);
    const child = this;
    const parent = child.closest("div.item");
    //console.log(parent)
    
    //get the cost of the removed element
    let costOfItem = parent.querySelector(".price-in-cart").textContent;
    costOfItem = Number(costOfItem.replace("$", ""));

    //get the current total. subtract removed element from total
    let currentTotal = document.getElementById("money").textContent;
    currentTotal = (Number(currentTotal.replace("$", "")) - costOfItem).toFixed(2);

    //update current total
    document.getElementById("money").textContent = "$" + currentTotal;

    //remove parent
    parent.remove();
}