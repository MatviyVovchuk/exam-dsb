document.addEventListener("DOMContentLoaded", function () {
  // Function to handle window resize and adjust navigation position
  function handleResize() {
    // Select the navigation menu element
    var nav = document.querySelector("header .navbar");

    // Select the toolbar administration element and its tray
    var toolbarAdmin = document.getElementById("toolbar-administration");
    var toolbarAdminNav = document.getElementById(
      "toolbar-item-administration-tray"
    );

    // Check if the window width is less than 991px
    if (window.innerWidth <= 991) {
      // Check if toolbar administration is active and has a specific tray class

      if (toolbarAdmin) {
        console.log(toolbarAdmin);
        if (toolbarAdminNav.classList.contains("is-active") && toolbarAdminNav.classList.contains("toolbar-tray-horizontal")) {
          // If the element exists, find the navigation menu with class .navbar
          // console.log("qqq");
          if (nav) {
            nav.setAttribute("style", "top: 79px !important;");
          }
        } else {
          nav.setAttribute("style", "top: 39px !important;");
        }
      } else {
        // no admin
        nav.setAttribute("style", "top: 0px !important;");
      }
    } else {
      // Set the navigation menu top position for larger screens
      nav.setAttribute("style", "top: revert-layer !important;");
    }
  }

  if (window.innerWidth <= 991) {
    // Call to handleResize on page load
    handleResize();
    console.log("show")
  }

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});
