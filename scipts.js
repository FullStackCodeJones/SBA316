document.addEventListener("DOMContentLoaded", () => {
  const programSelect = document.getElementById("program");
  const programDescriptions = document.querySelectorAll(".program-desc");
  const programForm = document.getElementById("program-form");

  // Show description based on selection
  programSelect.addEventListener("change", () => {
    const selectedProgram = programSelect.value;

    // Hide all descriptions first
    programDescriptions.forEach((desc) => {
      desc.style.display = "none";
    });

    // Show the selected program's description if it exists
    if (selectedProgram) {
      const selectedDesc = document.getElementById(`${selectedProgram}-desc`);
      if (selectedDesc) {
        selectedDesc.style.display = "block";
      }
    }
  });

  // Form submission validation
  programForm.addEventListener("submit", (event) => {
    if (!programSelect.value) {
      alert("Please select a program to get involved.");
      event.preventDefault();
    } else {
      alert(
        `You have chosen to get involved in the ${
          programSelect.options[programSelect.selectedIndex].text
        } program.`
      );
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
