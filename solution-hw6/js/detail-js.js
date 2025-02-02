//creating objects
const glaze = {
    option: ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"],
    adaption: [0, 0, 0.5, 1.5],
}

const size = {
    option: ["1", "3", "6", "12"],
    adaption: [1, 3, 5, 10],
}

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


let cart = []

if (localStorage.getItem("cart") != null) {
    const cartArrayString = localStorage.getItem("cart");
    const cartArray = JSON.parse(cartArrayString);
    //console.log(cartArray)

    for (const cartData of cartArray) {
        cart.push(cartData)
    }   
    console.log(localStorage.getItem("cart"))
}


function addToCart() {
    const rollType = params.get("rolls");

    let selectGlazing = document.getElementById("glaze-option");
    let glazingText = selectGlazing.options[selectGlazing.selectedIndex].text;

    let selectPackSize = document.getElementById("pack-size");
    let selectSize = selectPackSize.options[selectPackSize.selectedIndex].text;


    const basePrice = rolls[rollType]["basePrice"];
    const imageURL = './HW1-assets/products/' + rolls[rollType]["imageFile"];

    let glazeAdaption = 0;
    for (i=0; i < glaze.option.length; i++) {
        if (glaze.option[i].toLocaleLowerCase() === glazingText.toLocaleLowerCase()) {
            glazeAdaption = glaze.adaption[i];
        }
    }

    let packAdaption = 1;
    for (i = 0; i < size.option.length; i++) {
        if (size.option[i] === selectSize) {
            packAdaption = size.adaption[i];
        }
    }

    

    const item = new Roll(rollType, glazingText, selectSize, basePrice, packAdaption, glazeAdaption, imageURL);
    //console.log(cart)
    cart.push(item)
    //console.log(cart)
    saveToLocalStorage()
}

//setting fields using created objects
//https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript
let selectGlaze = document.getElementById("glaze-option");
let selectSize = document.getElementById("pack-size");

for (i = 0; i < glaze.option.length; i++) {
    let elem = document.createElement('option');
    elem.value = glaze.option[i];
    elem.innerHTML = glaze.option[i];
    selectGlaze.appendChild(elem);
}


for (i = 0; i < size.option.length; i++) { 
    let elem = document.createElement('option');
    elem.value = size.option[i];;
    elem.innerHTML = size.option[i];;
    selectSize.appendChild(elem);
}


//getting text from the fields and matching them to adaptions
//https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box
function glazePriceAdjustment() {
    let selectGlazing = document.getElementById("glaze-option");
    let glazingText = selectGlazing.options[selectGlazing.selectedIndex].text;
    // console.log(glazingText);
    let glazePriceAdaption = 0
    for (i = 0; i < glaze.option.length; i++) {
        // console.log("hello")
        if (glaze.option[i].toLocaleLowerCase() === glazingText.toLocaleLowerCase()) {
            glazePriceAdaption = glaze.adaption[i];
        }
    }
    //console.log("this is glazePriceAdaption", glazePriceAdaption)
    return glazePriceAdaption;
}


function getPackSize() {
    let selectPackSize = document.getElementById("pack-size");
    let selectSize = selectPackSize.options[selectPackSize.selectedIndex].text;
    let sizePriceAdaption = 1;
    for (i = 0; i < size.option.length; i++) {
        if (size.option[i] === selectSize) {
            sizePriceAdaption = size.adaption[i];
        }
    }

    //console.log("this is sizePriceAdaption", sizePriceAdaption);
    return sizePriceAdaption;
}






//final calculation
function finalPrice() {
    let basePrice = rolls[rollType]["basePrice"];
    let glazeAdjustment = glazePriceAdjustment();
    let packAdjustmnet = getPackSize();

    finalCost = ((basePrice + glazeAdjustment) * packAdjustmnet).toFixed(2);
    document.getElementById("total-cost").textContent = "$" + finalCost;
    return finalCost
}

function saveToLocalStorage() {
    //convert array to json string
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
  
    //save to local storage
    localStorage.setItem("cart", cartArrayString);
  }

  