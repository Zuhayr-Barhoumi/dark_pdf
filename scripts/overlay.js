// Create the overlay element
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; // adjust opacity as needed
overlay.style.pointerEvents = "none"; // prevent blocking interactions

// Add the overlay to the document body
document.body.appendChild(overlay);