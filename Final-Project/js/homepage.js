/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
let isNavOpen = false;

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.margin = "auto";
  document.getElementById("header").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
}


function navState() {
  if (isNavOpen === false) {
    openNav();
    // console.log("opening Nav");
    isNavOpen = true;
  }
  else {
    closeNav();
    // console.log("closing Nav");
    isNavOpen = false
  }
  return isNavOpen
}


// ----------------------------


class Driver {
  constructor(driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent) {
    this.name = driverName;
    this.wins = driverWins;
    this.points = driverPoints;
    this.picture = driverPic; 
    this.bio = driverBio;
    this.content = interestingContent;

    this.element = null;
  }
}

let driverList = [];

function addDriver(driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent) {
  const driver = new Driver(driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent);
  driverList.push(driver);
  return driver;
}

function createElement(driver) {
  let template = document.querySelector("#dropdown-template");
  const clone = template.content.cloneNode(true);

  driver.element = clone.querySelector(".dropdown");

  const driverElementList = document.querySelector("#driver-list");
  driverElementList.prepend(driver.element);

  updateElement(driver);
}

function updateElement(driver) {
  const name = driver.element.querySelector("#button-item-name");
  const wins = driver.element.querySelector("#button-item-wins");
  const points = driver.element.querySelector("#button-item-points");
  const picture = driver.element.querySelector("#bio-img");
  const bio = driver.element.querySelector("#bio-text");
  const content = driver.element.querySelector("#interesting-content");

  name.innerText = driver.name;
  wins.innerText = driver.wins;
  points.innerText = driver.points;
  picture.src = driver.picture;
  bio.innerText = driver.bio;
  content.innerText = driver.content;
}

const mVer = addDriver("M. Verstappen", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
const cPer = addDriver("C. Perez", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
const cLec = addDriver("C. LeClerc", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")



for (let i = 0; i < driverList.length; i++) {
  console.log(driverList[i]);
  createElement(driverList[i]);
}



