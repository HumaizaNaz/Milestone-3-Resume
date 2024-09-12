var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var cnicElement = document.getElementById("cnic");
    var nationalityElement = document.getElementById("nationality");
    var genderElement = document.getElementById("gender");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var templateSelect = document.getElementById("template");
    var resumeOutputElement = document.getElementById("resumeOutput");
    // Check if all required fields are present
    if (nameElement &&
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
        resumeOutputElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var cnic = cnicElement.value;
        var nationality = nationalityElement.value;
        var gender = genderElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var template = templateSelect.value;
        // Generate resume content
        resumeOutputElement.innerHTML = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(name_1, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n      <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n      <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n      <p><strong>Gender:</strong> ").concat(gender, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
        // Apply theme styles
        resumeOutputElement.classList.remove("elegantRose", "softLavender", "vibrantPlum", "coolMint", "sunsetOrange", "classicBlue");
        resumeOutputElement.classList.add(template);
        // Dynamically update heading colors and profile picture styles
        updateHeadingColors(template);
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
// Function to update heading colors and styles dynamically
function updateHeadingColors(template) {
    var educationHeading = document.querySelector(".heading-education");
    var experienceHeading = document.querySelector(".heading-experience");
    var skillsHeading = document.querySelector(".heading-skills");
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
