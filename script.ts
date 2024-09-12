document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const cnicElement = document.getElementById("cnic") as HTMLInputElement;
  const nationalityElement = document.getElementById("nationality") as HTMLInputElement;
  const genderElement = document.getElementById("gender") as HTMLInputElement;
  const educationElement = document.getElementById("education") as HTMLInputElement;
  const experienceElement = document.getElementById("experience") as HTMLInputElement;
  const skillsElement = document.getElementById("skills") as HTMLInputElement;
  const templateSelect = document.getElementById("template") as HTMLSelectElement;

  const resumeOutputElement = document.getElementById("resumeOutput");

  // Check if all required fields are present
  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    addressElement &&
    cnicElement &&
    nationalityElement &&
    genderElement &&
    educationElement &&
    experienceElement &&
    skillsElement &&
    templateSelect &&
    resumeOutputElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const cnic = cnicElement.value;
    const nationality = nationalityElement.value;
    const gender = genderElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const template = templateSelect.value;

    // Generate resume content
    resumeOutputElement.innerHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>CNIC:</strong> ${cnic}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    // Apply theme styles
    resumeOutputElement.classList.remove(
      "elegantRose",
      "softLavender",
      "vibrantPlum",
      "coolMint",
      "sunsetOrange",
      "classicBlue"
    );
    resumeOutputElement.classList.add(template);

    // Dynamically update heading colors and profile picture styles
    updateHeadingColors(template);
  } else {
    console.error("One or more form elements are missing.");
  }
});

// Function to update heading colors and styles dynamically
function updateHeadingColors(template: string) {
  const educationHeading = document.querySelector(".heading-education") as HTMLElement;
  const experienceHeading = document.querySelector(".heading-experience") as HTMLElement;
  const skillsHeading = document.querySelector(".heading-skills") as HTMLElement;

  switch (template) {
    case "elegantRose":
      educationHeading.style.color = "#d15eea";
      experienceHeading.style.color = "#d15eea";
      skillsHeading.style.color = "#d15eea";
      break;
    case "softLavender":
      educationHeading.style.color = "#a899ff";
      experienceHeading.style.color = "#a899ff";
      skillsHeading.style.color = "#a899ff";
      break;
    case "vibrantPlum":
      educationHeading.style.color = "#6a1b9a";
      experienceHeading.style.color = "#6a1b9a";
      skillsHeading.style.color = "#6a1b9a";
      break;
    case "coolMint":
      educationHeading.style.color = "#3eb489";
      experienceHeading.style.color = "#3eb489";
      skillsHeading.style.color = "#3eb489";
      break;
    case "sunsetOrange":
      educationHeading.style.color = "#ff5722";
      experienceHeading.style.color = "#ff5722";
      skillsHeading.style.color = "#ff5722";
      break;
    case "classicBlue":
      educationHeading.style.color = "#0d47a1";
      experienceHeading.style.color = "#0d47a1";
      skillsHeading.style.color = "#0d47a1";
      break;
    default:
      console.error("Theme not recognized.");
      break;
  }
}

