document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    // Compose the email body
    const emailBody = `Hello Keshan,%0D%0A%0D%0AYou have received a new message from your portfolio contact form.%0D%0A%0D%0A` +
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `Message:%0D%0A${message}%0D%0A`;

    // Open the user's email client with the pre-filled email
    const mailtoLink = `mailto:sachinthakeshan175@gmail.com?subject=New%20Message%20from%20${name}&body=${emailBody}`;
    window.location.href = mailtoLink;

    // Clear the form fields after sending the email
    document.getElementById("contactForm").reset();
});