document.addEventListener("DOMContentLoaded", function() {
    const firstText = "Hi there";
    const secondText = "Keshan Silva";
    const roles = ["Software Engineer - Fullstack", "Web Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"];

    const typedHiElement = document.getElementById("typed-hi");
    const typedNameElement = document.getElementById("typed-name");
    const typedRoleElement = document.getElementById("typed-role");

    let index1 = 0;
    let index2 = 0;
    let roleIndex = 0;
    let roleCharIndex = 0;
    let isFirstRole = true; // Flag to track if it's the first role

    function typeFirst() {
        if (index1 < firstText.length) {
            typedHiElement.innerHTML += firstText.charAt(index1);
            index1++;
            setTimeout(typeFirst, 90); // Typing speed for the first text
        } else {
            setTimeout(typeSecond, 90); // Delay before starting the second text
        }
    }

    function typeSecond() {
        if (index2 < secondText.length) {
            typedNameElement.innerHTML += secondText.charAt(index2);
            index2++;
            setTimeout(typeSecond, 80); // Typing speed for the second text
        } else {
            typeRole(); // Move directly to typing the roles without delay
        }
    }

    function typeRole() {
        if (roleCharIndex < roles[roleIndex].length) {
            typedRoleElement.innerHTML += roles[roleIndex].charAt(roleCharIndex);
            roleCharIndex++;
            setTimeout(typeRole, 100); // Typing speed for the role text
        } else {
            if (isFirstRole) {
                isFirstRole = false;
                setTimeout(changeRole, 2000); // Wait 50 seconds after the first role "50000"
            } else {
                changeRole(); // Immediately change to the next role
            }
        }
    }

    function changeRole() {
        roleCharIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        typedRoleElement.innerHTML = ''; // Clear current role
        typeRole(); // Start typing the next role immediately
    }

    // Start typing sequence
    typeFirst();
});



const text = "I am passionate about using technology to solve complex problems and make a positive impact on the world. So currently I am studying Software Engineering at IJSE-Institute of Software Engineering. As a creative problem solver and team player, I am committed to delivering high-quality work and exceeding expectations. I am eager to connect with other technology professionals and explore new opportunities for growth and development.";
const detailsElement = document.getElementById('details');
let index = 0;

function typeText() {
    if (index < text.length) {
        detailsElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Adjust typing speed here (50ms per character)
    }
}

// Start typing after the page loads
window.onload = () => {
    typeText();
};