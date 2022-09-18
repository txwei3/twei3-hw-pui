// function myFunc (color) {
//     let elem = document.getElementById("detail-description");
//     elem.style.color = color
// }

// create a constructor for each glaze option?

let basePrice = 2.49

function getGlazeOption() {
    let selectGlazing = document.getElementById("glaze-option");
    let glazingText = selectGlazing.options[selectGlazing.selectedIndex].text;
    console.log(glazingText)
}


function finalPrice(basePrice, glazingPrice, packPrice) {
    console.log((basePrice + glazingPrice) * packPrice );
    return (basePrice + glazingPrice) * packPrice;
}