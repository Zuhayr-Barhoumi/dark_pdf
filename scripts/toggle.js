// page script
const toggleSwitch = document.getElementById("toggle");

toggleSwitch.addEventListener("change", function () {
  const isChecked = this.checked;

  // Send a message to the background script indicating the toggle state
  chrome.runtime.sendMessage({ type: "toggleSwitch", isChecked: isChecked });
});
