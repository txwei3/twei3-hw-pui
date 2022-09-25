//creating objects
const glaze = {
    option: ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"],
    adaption: [0, 0, 0.5, 1.5],
}

const size = {
    option: ["1", "3", "6", "12"],
    adaption: [1, 3, 5, 10],
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
}