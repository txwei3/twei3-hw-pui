// geting text from a dropdown menu
// https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box

function getPackSize() {
    let selectPackSize = document.getElementById("pack-size");
    let selectSize = selectPackSize.options[selectPackSize.selectedIndex].text;
    let sizeAdaption = 1;
    if (selectSize == 1) {
        sizeAdaption = 1;
    }

    else if (selectSize == 3) {
        sizeAdaption = 3;
    }

    else if (selectSize == 6) {
        sizeAdaption = 5;
    }

    else if (selectSize == 12) {
        sizeAdaption = 10;
    }

    //console.log("this is sizeAdaption", sizeAdaption);
    return sizeAdaption;
}


function glazePriceAdjustment() {
    let selectGlazing = document.getElementById("glaze-option");
    let glazingText = selectGlazing.options[selectGlazing.selectedIndex].text;
    let glazePriceAdaption = 0
    if (glazingText == "Vanilla Milk") {
        glazePriceAdaption = 0.5;
    }

    else if (glazingText == "Double Chocolate") {
        glazePriceAdaption = 1.5;
    }
    //console.log("this is packAdaption", glazePriceAdaption)
    return glazePriceAdaption;
}

function finalPrice() {
    let basePrice = 2.49;
    let glazeAdjustment = glazePriceAdjustment();
    let packAdjustmnet = getPackSize();

    finalCost = ((basePrice + glazeAdjustment) * packAdjustmnet).toFixed(2);
    //console.log(typeof finalCost, finalCost)
    document.getElementById("total-cost").textContent = "$" + finalCost;    
}



