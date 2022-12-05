$('.accordian-body').on('show.bs.collapse', function () {
    $(this).closest("table")
        .find(".collapse.in")
        .not(this)
        //.collapse('toggle')
})


class F1Constructor {
constructor(constructorPosition, constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent) {
    this.position = constructorPosition;
    this.name = constructorName;
    this.wins = constructorWins;
    this.points = constructorPoints;
    this.picture = constructorPic; 
    //this.bio = constructorBio;
    //this.content = constructorInterestingContent;

    this.element = null;
}
}

let constructorList = [];


function addConstructor(constructorPosition, constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent) {
    const F1constructor = new F1Constructor(constructorPosition, constructorName, constructorWins, constructorPoints, constructorPic, constructorBio, constructorInterestingContent);
    constructorList.push(F1constructor);
    return F1constructor;
}

function createElement(F1constructor, i) {
    let template = document.querySelector("#dropdown-template");
    const clone = template.content.cloneNode(true);

    F1constructor.element = clone.querySelector("#dropdown");

    const constructorElementList = document.querySelector("#constructor-list");
    constructorElementList.prepend(F1constructor.element);

    //change target of dropdown
    //https://stackoverflow.com/questions/46937411/data-target-button-attribute-change-via-vanilla-javascript
    let temp = document.getElementById("demo1")
    temp.id = "demo" + i
    //console.log(temp)

    let test = document.getElementById("test")
    test.dataset.target = "#demo" + i;

    if (i%2=== 0) {
        test.style.backgroundColor = "#FFF7F7";
    }
    else {
        test.style.backgroundColor = "#FFE2E2";
    }

    
    updateElement(F1constructor);
}

function updateElement(F1constructor) {
    const position = F1constructor.element.querySelector("#button-item-position");
    const name = F1constructor.element.querySelector("#button-item-name");
    const wins = F1constructor.element.querySelector("#button-item-wins");
    const points = F1constructor.element.querySelector("#button-item-points");
    const picture = F1constructor.element.querySelector("#bio-img");
    const bio = F1constructor.element.querySelector("#bio-text");
    const content = F1constructor.element.querySelector("#interesting-content");

    position.innerText = F1constructor.position;
    name.innerText = F1constructor.name;
    wins.innerText = F1constructor.wins;
    points.innerText = F1constructor.points;
    picture.src = F1constructor.picture;
    picture.setAttribute("alt", "The logo of " + F1constructor.name)
    //bio.innerText = F1constructor.bio;
    //content.innerText = F1constructor.content;
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

const rb = addConstructor(1, "Red Bull", 16, 759, "./HW1-assets/constructorPictures/rb.jpg", "hello", "beunos dias")
const ferrari = addConstructor(2, "Ferrari", 4, 554, "./HW1-assets/constructorPictures/ferrari.jpg", "hello", "beunos dias")
const merc = addConstructor(3, "Mercedes", 1, 515, "./HW1-assets/constructorPictures/merc.jpg", "hello", "beunos dias")
const alpine = addConstructor(4, "Alpine", 0, 173, "./HW1-assets/constructorPictures/alpine.jpg", "hello", "beunos dias")
const mcl = addConstructor(5, "McLaren", 0, 159, "./HW1-assets/constructorPictures/mcl.jpg", "hello", "beunos dias")
const alfaR = addConstructor(6, "Alfa Romeo", 0, 55, "./HW1-assets/constructorPictures/alfaR.jpg", "hello", "beunos dias")
const amr = addConstructor(7, "Aston Martin", 0, 55, "./HW1-assets/constructorPictures/amr.jpg", "hello", "beunos dias")
const haas = addConstructor(8, "Haas", 0, 37, "./HW1-assets/constructorPictures/haas.jpg", "hello", "beunos dias")
const alphaT = addConstructor(9, "AlphaTauri", 0, 35, "./HW1-assets/constructorPictures/alphaT.jpg", "hello", "beunos dias")
const williams = addConstructor(10, "Williams", 0, 8, "./HW1-assets/constructorPictures/williams.jpg", "hello", "beunos dias")

//console.log(constructorList);

constructorList = constructorList.reverse();

for (let i = 0; i < constructorList.length; i++) {
    //console.log(constructorList[i]);
    createElement(constructorList[i], i);
}