class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, packAdaption, glazeAdaption, imageURL) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.imageURL = imageURL;
        this.psAdaption = packAdaption;
        this.gAdaption = glazeAdaption;

        this.element = null;
    }

}


function retreiveFromLocalStorage() {
    //get the json string from local storage string
    const cartArrayString = localStorage.getItem("cart");
  
    //convert back to array
    const cartArray = JSON.parse(cartArrayString);
  
    //iterating through the array and recreating the item
    for (const cartData of cartArray) {
      const cartItem = addRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice, cartData.psAdaption, cartData.gAdaption, cartData.imageURL)
      createElement(cartItem)
    }
  
    //console.log(cartArray);
  }


let payAmount = document.getElementById("money").innerText;
payAmount = Number(payAmount.replace("$", ""))
//console.log(typeof payAmount, payAmount)




function addRoll(rollType, rollGlazing, packSize, basePrice, packAdaption, glazeAdaption, imageURL) {
    const roll = new Roll (rollType, rollGlazing, packSize, basePrice, packAdaption, glazeAdaption, imageURL);
    cart.push(roll);
    return roll;
}



function createElement(roll) {
    let template = document.querySelector("#roll-template");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".item");

    const rollElementList = document.querySelector("#flex-container-cart");
    rollElementList.prepend(roll.element)

    updateElement(roll);
}



function updateElement(roll) {
    //console.log("hello");
    const rollImg = roll.element.querySelector("#cart-menu-item");
    const nameInCart = roll.element.querySelector("#name-in-cart");
    const glazeType = roll.element.querySelector("#glazing-type");
    const packSizeInCart = roll.element.querySelector("#pack-size-in-cart");
    const priceInCart = roll.element.querySelector("#price-in-cart");
    
    rollImg.src = roll.imageURL;
    nameInCart.innerText = roll.type + " Cinnamon Roll";
    glazeType.innerText = "Glazing: " + roll.glazing;
    packSizeInCart.innerText = "Pack Size: " + roll.size;
    priceInCart.innerText = "$" + ((roll.basePrice + roll.gAdaption)* roll.psAdaption).toFixed(2);
    //console.log(priceInCart);

    const removeBtn = roll.element.querySelector("#remove-btn");
    //console.log(removeBtn)
    removeBtn.addEventListener("click", () => {
        removeItem(roll);
    })



    let tempPriceVar = priceInCart.innerText
    tempPriceVar = Number(tempPriceVar.replace("$", ""))
    //console.log(typeof tempPriceVar, tempPriceVar);
    payAmount += tempPriceVar;
    document.getElementById("money").innerText = "$" + payAmount;
}

function removeItem(roll) {
    //console.log(cart)
    //console.log("del");
    

    const tempItemPrice = ((roll.basePrice + roll.gAdaption) * roll.psAdaption).toFixed(2);
    //console.log(tempItemPrice);

    let tempTotalPrice = document.getElementById("money").innerText;
    tempTotalPrice = Number(tempTotalPrice.replace("$", ""));
    //console.log(typeof tempTotalPrice, tempTotalPrice);

    payAmount = (tempTotalPrice - tempItemPrice).toFixed(2);
    //console.log(payAmount);

    document.getElementById("money").innerText = "$" + payAmount;

    roll.element.remove();

    const indToRemove = cart.indexOf(roll)
    //console.log(indToRemove)
    if (indToRemove > -1) {
        cart.splice(indToRemove, 1);
    }
    
    


    //console.log(cart)
}



// const originalRoll = addRoll("Original", "Sugar Milk", 1, 2.49, 1, 0, "./HW1-assets/products/original-cinnamon-roll.jpg");
// const walnutRoll = addRoll("Walnut", "Vanilla Milk", 12, 3.49, 10, 0.5, "./HW1-assets/products/walnut-cinnamon-roll.jpg");
// const raisinRoll = addRoll("Raisin", "Sugar Milk", 3, 2.99, 3, 0, "./HW1-assets/products/raisin-cinnamon-roll.jpg");
// const appleRoll = addRoll("Apple", "Original", 3, 3.49, 3, 0, "./HW1-assets/products/apple-cinnamon-roll.jpg");


for (i = 0; i < cart.length; i++) {
    //console.log(cart[i]);
    createElement(cart[i]);
}

// addEventListener("load", retreiveFromLocalStorage())

console.log(retreiveFromLocalStorage())