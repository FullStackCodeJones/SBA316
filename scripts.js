document.addEventListener("DOMContentLoaded", function () {
  // Cache Elements
  const programDropdown = document.getElementById("program");
  const descriptionContainer = document.getElementById("program-description");
  const successMessage = document.getElementById("success-message");
  const lastUpdated = document.getElementById("last-updated");

  // Display current date/time in BOM section
  const currentDate = new Date();
  lastUpdated.textContent = `Last updated on ${currentDate.toLocaleString()}`;

  // Set up event listener for program dropdown change
  programDropdown.addEventListener("change", function () {
    // Hide all descriptions
    const descriptions = document.querySelectorAll(".program-desc");
    descriptions.forEach((desc) => {
      desc.classList.remove("show");
    });

    // Show the selected program's description
    const selectedProgram = programDropdown.value;
    if (selectedProgram) {
      const selectedDesc = document.getElementById(`${selectedProgram}-desc`);
      selectedDesc.classList.add("show");
    }

    // Smooth scroll to description section
    descriptionContainer.scrollIntoView({ behavior: "smooth" });
  });

  // Form submit event listener with validation
  const form = document.getElementById("program-form");
  form.addEventListener("submit", function (event) {
    if (!programDropdown.value) {
      event.preventDefault();
      alert("Please select a program before submitting!");
    } else {
      event.preventDefault();
      successMessage.style.display = "block";
    }
  });
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
