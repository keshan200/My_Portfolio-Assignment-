const roles = [
    "Software Engineer-Fullstack",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "UI/UX Designer"
];

let currentRoleIndex = 0;
let currentText = "";
let charIndex = 0;
let typingSpeed = 100;
let delayBetweenRoles = 900; // 6 seconds delay between roles 6000
let firstRoleDelay = 4000; // 4 seconds delay for the first role

const roleElement = document.getElementById('thir');

function typeRole() {
    if (charIndex < roles[currentRoleIndex].length) {
        currentText += roles[currentRoleIndex].charAt(charIndex);
        roleElement.textContent = currentText;
        charIndex++;
        setTimeout(typeRole, typingSpeed); // Call the function recursively for each character
    } else {
        // Check if it's the first role
        let currentDelay = (currentRoleIndex === 0) ? firstRoleDelay : delayBetweenRoles;
        setTimeout(deleteRole, currentDelay); // Wait depending on the current role
    }
}

function deleteRole() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        roleElement.textContent = currentText;
        charIndex--;
        setTimeout(deleteRole, typingSpeed); // Call the function recursively to delete each character
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role, loop back if needed
        setTimeout(typeRole, typingSpeed);
    }
}

// Start the typing animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, typingSpeed);
});
