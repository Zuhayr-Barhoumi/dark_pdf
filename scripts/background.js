chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "toggleSwitch") {
    // Forward the toggle state to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "toggleSwitch",
        isChecked: request.isChecked,
      });
    });
  }
});
