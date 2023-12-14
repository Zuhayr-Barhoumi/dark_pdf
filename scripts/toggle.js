// Retrieve the state from Chrome Storage
chrome.storage.sync.get(["toggleState"], function (result) {
  const toggleState = result.toggleState;

  // Set the initial state of the toggle button
  document.getElementById("toggle").checked = toggleState;
});

const toggleSwitch = document.getElementById("toggle");

toggleSwitch.addEventListener("change", function () {
  const isChecked = this.checked;

  chrome.storage.sync.set({ toggleState: this.checked });
  // Send a message to the background script indicating the toggle state
  chrome.runtime.sendMessage({ type: "toggleSwitch", isChecked: isChecked });
});
