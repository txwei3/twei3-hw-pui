const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};



const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("rolls");

//console.log(rollType);


// Now, we will use the URL parameter to update our page.

// Update the header text
const headerElement = document.querySelector('#roll-header-text');
headerElement.innerText = rollType + " Cinnamon Roll"

// Update the image
const rollImage = document.querySelector('#roll-img');
rollImage.src = './HW1-assets/products/' + rollType + "-cinnamon-roll.jpg";


let basePrice = document.getElementById("total-cost").innerText;

basePrice = rolls[rollType]["basePrice"];

document.getElementById("total-cost").textContent = "$" + basePrice;
