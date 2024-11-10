// Get the dropdown element and the description paragraphs
const programSelect = document.getElementById("program");
const programDescriptions = document.querySelectorAll(".program-desc");

// Function to hide all descriptions
function hideAllDescriptions() {
  programDescriptions.forEach((desc) => {
    desc.style.display = "none"; // Hide all descriptions
  });
}

// Event listener for dropdown change
programSelect.addEventListener("change", function () {
  const selectedProgram = programSelect.value; // Get selected program

  // Hide all descriptions first
  hideAllDescriptions();

  // Show the selected program's description
  if (selectedProgram) {
    const descriptionId = selectedProgram + "-desc"; // Construct the ID based on selected value
    const description = document.getElementById(descriptionId); // Get the corresponding description
    if (description) {
      description.style.display = "block"; // Show the selected description
    }
  }
});

//I SLEPT ON THIS SBA SOMETHING SERIOUS
/*document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("programForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the page from refreshing

    const selectedProgram = document.getElementById("program").value;

    // Simple validation: Check if the user has selected a program
    if (!selectedProgram) {
      alert("Please select a program to get involved.");
    } else {
      alert(
        `You have chosen to get involved in the ${selectedProgram} program.`
      );
    }
  }); 
});*/
