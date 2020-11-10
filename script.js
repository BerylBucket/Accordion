// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
function addDet(){
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
}

window.addEventListener('load', addDet, false);