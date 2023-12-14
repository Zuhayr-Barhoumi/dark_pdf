// Retrieve the state from Chrome Storage
chrome.storage.sync.get(["toggleState"], function (result) {
  const toggleState = result.toggleState;

  // Set the initial state of the toggle button
  document.getElementById("toggle").checked = toggleState;
});

console.log("Content script is running");
// Create the overlay element
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
overlay.style.pointerEvents = "none"; // prevent blocking interactions

overlay.classList.add("smhc35");
console.log("CLass smhc35 added to overlay");

// Add the overlay to the document body
document.body.appendChild(overlay);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "toggleSwitch") {
    const smhc35Element = document.querySelector(".smhc35");

    if (smhc35Element) {
      // Toggle the "hidden" class based on the toggle state
      smhc35Element.classList.toggle("hidden", !request.isChecked);
    }
  }
});
