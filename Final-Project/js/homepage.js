//---creating the dropdowns for the drivers---

var settings = {
  "url": "http://ergast.com/api/f1/2022/driverStandings.json",
  "method": "GET",
  "timeout": 0,
};

var positionList; // for the driver standings
var totalNumDrivers = 0; // total number of drivers

$.ajax(settings).done(function (response) {
  console.log(response);
  let temp = response.MRData.StandingsTable.StandingsLists[0];
  positionList = temp.DriverStandings;
  totalNumDrivers = response.MRData.total;
  getInfo()
  loadInfo()
  return positionList
});


class Driver {
  constructor(driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent) {
    this.name = driverName;
    this.wins = driverWins;
    this.points = driverPoints;
    this.picture = driverPic; 
    //this.bio = driverBio;
    //this.content = interestingContent;

    this.element = null;
  }
}

let driverList = [];


function addDriver(driverPosition, driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent) {
  const driver = new Driver(driverPosition, driverName, driverWins, driverPoints, driverPic, driverBio, interestingContent);
  driverList.push(driver);
  return driver;
}

function createElement(driver, i) {
  let template = document.querySelector("#dropdown-template");
  const clone = template.content.cloneNode(true);

  driver.element = clone.querySelector("#dropdown");

  const driverElementList = document.querySelector("#driver-list");
  driverElementList.prepend(driver.element);

  let temp = document.getElementById("demo1")
  temp.id = "demo" + i
  //console.log(temp)

  let test = document.getElementById("test")
  test.dataset.target = "#demo" + i;

  updateElement(driver, i);
}

function updateElement(driver, i) {
  const position = driver.element.querySelector("#button-item-position");
  const name = driver.element.querySelector("#button-item-name");
  const wins = driver.element.querySelector("#button-item-wins");
  const points = driver.element.querySelector("#button-item-points");
  const picture = driver.element.querySelector("#bio-img");
  const bio = driver.element.querySelector("#bio-text");
  const content = driver.element.querySelector("#interesting-content");

  position.innerText = i;
  name.innerText = driver.name;
  wins.innerText = driver.wins;
  points.innerText = driver.points;
  picture.src = driver.picture;
  //bio.innerText = driver.bio;
  //content.innerText = driver.content;
}



function getInfo() {
  for (let i = 0; i < totalNumDrivers; i++) {
    // let dPosition = i;
    let dName = positionList[i].Driver.givenName + " " + positionList[i].Driver.familyName; //first name + last name
    let dWins = positionList[i].wins; // no. wins
    let dPoints = positionList[i].points; // no. points

    let dPic = "./HW1-assets/driverPictures/" + positionList[i].Driver.givenName + ".jpg";
    //console.log(dPic);
    let dBio = "hello"
    let dContent = "beunos Dias"
    //console.log(dName, dWins, dPoints, dPic, dBio, dContent)
    //addDriver(dName, dWins, dPoints, dPic, dBio, dContent);
    addDriver(dName, dWins, dPoints, dPic);
  }
}



function loadInfo() {
  driverList = driverList.reverse()
  for (let i = 0; i < driverList.length; i++) {
    //console.log(driverList[i]);
    //console.log(driverList.length - i)
    createElement(driverList[i], driverList.length - i);
  }
}




// const mVer = addDriver("M. Verstappen", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
// const cPer = addDriver("C. Perez", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")
// const cLec = addDriver("C. LeClerc", 14, 429, "./HW1-assets/driverPictures/m_Verstappen.jpg", "hello", "beunos dias")