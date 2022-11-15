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

