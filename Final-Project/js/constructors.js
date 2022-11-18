class F1Constructor {
constructor(constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent) {
    this.name = constructorName;
    this.wins = constructorWins;
    this.points = constructorPoints;
    this.picture = constructorPic; 
    this.bio = constructorBio;
    this.content = constructorInterestingContent;

    this.element = null;
}
}

let constructorList = [];


function addConstructor(constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent) {
    const F1constructor = new F1Constructor(constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent);
    constructorList.push(F1constructor);
    return F1constructor;
}

function createElement(F1constructor) {
    let template = document.querySelector("#dropdown-template");
    const clone = template.content.cloneNode(true);

    F1constructor.element = clone.querySelector(".dropdown");

    const constructorElementList = document.querySelector("#constructor-list");
    constructorElementList.prepend(F1constructor.element);

    updateElement(F1constructor);
}

function updateElement(F1constructor) {
    const name = F1constructor.element.querySelector("#button-item-name");
    const wins = F1constructor.element.querySelector("#button-item-wins");
    const points = F1constructor.element.querySelector("#button-item-points");
    const picture = F1constructor.element.querySelector("#bio-img");
    const bio = F1constructor.element.querySelector("#bio-text");
    const content = F1constructor.element.querySelector("#interesting-content");

    name.innerText = F1constructor.name;
    wins.innerText = F1constructor.wins;
    points.innerText = F1constructor.points;
    picture.src = F1constructor.picture;
    bio.innerText = F1constructor.bio;
    content.innerText = F1constructor.content;
}


// function getInfo() {
// for (let i = 0; i < totalNumDrivers; i++) {
//     let dName = positionList[i].Driver.givenName + " " + positionList[i].Driver.familyName; //first name + last name
//     let dWins = positionList[i].wins; // no. wins
//     let dPoints = positionList[i].points; // no. points

//     let dPic = "./HW1-assets/driverPictures/" + positionList[i].Driver.givenName + ".jpg";
//     let dBio = "hello"
//     let dContent = "beunos Dias"
//     console.log(dName, dWins, dPoints, dPic, dBio, dContent)
//     addDriver(dName, dWins, dPoints, dPic, dBio, dContent);
// }
// console.log("hello")
// }



// function loadInfo() {
// driverList = driverList.reverse()
// for (let i = 0; i < driverList.length; i++) {
//     console.log(driverList[i]);
//     createElement(driverList[i]);
// }
// console.log("there")
// }

// getInfo()
// loadInfo()

const rb = addConstructor("Red Bull", 16, 719, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const ferrari = addConstructor("Ferrari", 4, 524, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const merc = addConstructor("Mercedes", 1, 505, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const alpine = addConstructor("Alpine", 0, 167, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const mcl = addConstructor("McLaren", 0, 148, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const alfaR = addConstructor("Alfa Romeo", 0, 55, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const amr = addConstructor("Aston Martin", 0, 50, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const haas = addConstructor("Haas", 0, 37, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const alphaT = addConstructor("AlphaTauri", 0, 35, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")
const williams = addConstructor("Williams", 0, 8, "./HW1-assets/logo/formula-1-logo-5-3.png", "hello", "beunos dias")

//console.log(constructorList);

constructorList = constructorList.reverse();

for (let i = 0; i < constructorList.length; i++) {
    //console.log(constructorList[i]);
    createElement(constructorList[i]);
}