class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


let cart = [];

//is this the correct implementation for this function?
function addToCart() {
    //console.log("hello");
    const rollType = params.get("rolls");

    let selectGlazing = document.getElementById("glaze-option");
    let glazingText = selectGlazing.options[selectGlazing.selectedIndex].text;

    let selectPackSize = document.getElementById("pack-size");
    let selectSize = selectPackSize.options[selectPackSize.selectedIndex].text;


    const basePrice = rolls[rollType]["basePrice"];

    const item = new Roll(rollType, glazingText, selectSize, basePrice);
    cart.push(item)
    console.log(cart)
}