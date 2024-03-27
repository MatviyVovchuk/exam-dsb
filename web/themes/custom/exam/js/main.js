document.addEventListener("DOMContentLoaded", function () {
  // Function to handle window resize
  function handleResize() {
    // Check if the element with id=toolbar-administration exists
    var toolbarAdmin = document.getElementById("toolbar-administration");
    if (toolbarAdmin) {
      // If the element exists, find the navigation menu with class .navbar
      var nav = document.querySelector("header .navbar");

      if (nav) {
        // Check the window width and change the position of the navigation menu using !important if the window width is less than 991px
        if (window.innerWidth <= 991) {
          nav.classList.add("navbar-fixed");
          nav.setAttribute("style", "top: 39px !important; z-index: 9;");
        } else {
          // Check if it is front page
          if (document.body.classList.contains("path-frontpage")) {
            nav.setAttribute("style", "top: -75%; z-index: revert-layer;");
          }
          else {
            nav.setAttribute("style", "top: 0; z-index: revert-layer;");
          }
        }
      }
    }
  }

  // Initial call to handleResize on page load
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});
