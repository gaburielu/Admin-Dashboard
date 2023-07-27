const toggleButton = document.getElementById("toggleButton");
const dashboard = document.getElementById("dashboard");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

// Function to toggle the dashboard's visibility
function toggleDashboard() {
    if (!overlay) {
      // Create the overlay element only when needed
      overlay = document.createElement("div");
      overlay.classList.add("overlay");
    }
  
    if (dashboard.style.display === "none") {
      dashboard.style.display = "block";
      dashboard.classList.add("show");
      document.body.appendChild(overlay); // Append overlay to the document body when dashboard is visible
    } else {
      dashboard.style.display = "none";
      dashboard.classList.remove("show");
      if (overlay.parentNode) {
        document.body.removeChild(overlay); // Remove overlay from the document body if it exists
      }
    }
  }

// Event listener to show/hide the dashboard when the toggle button is clicked
toggleButton.addEventListener("click", toggleDashboard);

// Event listener to hide the dashboard when the user clicks outside of it
document.addEventListener("click", (event) => {
  if (!dashboard.contains(event.target) && event.target !== toggleButton) {
    dashboard.style.display = "none";

    document.body.removeChild(overlay); // Remove overlay from the document body when dashboard is hidden
  }
});

dashboard.addEventListener("click", (event) => {
  event.stopPropagation();
});