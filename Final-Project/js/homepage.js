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

//---creating the dropdowns for the drivers---

var settings = {
  "url": "http://ergast.com/api/f1/2022/driverStandings.json",
  "method": "GET",
  "timeout": 0,
};

var positionList; // for the driver standings
var infoList; // for the driver information


$.ajax(settings).done(function (response) {
  //console.log(response);
  //console.log(typeof(response))
  let temp = response.MRData.StandingsTable.StandingsLists[0]
  positionList = temp.DriverStandings
  //console.log(typeof(positionList), positionList[0])
  return positionList
});


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
  let dName = driverName;
  let dWins = driverWins;
  let dPoints = driverPoints;

  for (let i = 0; i < positionList.length; i++) {
    dName = positionList[0].Driver.givenName + positionList[0].Driver.familyName //first name + last name
    dPoints = positionList[0].points // no. points
    dWins = positionList[0].wins // no. wins
  }

  const driver = new Driver(dName, dWins, dPoints, driverPic, driverBio, interestingContent);
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

// const mVer = addDriver("M. Verstappen", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
// const cPer = addDriver("C. Perez", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
// const cLec = addDriver("C. LeClerc", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")



// for (let i = 0; i < driverList.length; i++) {
//   //console.log(driverList[i]);
//   createElement(driverList[i]);
// }



