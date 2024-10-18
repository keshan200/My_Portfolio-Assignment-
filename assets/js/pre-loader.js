// JavaScript to hide the preloader and show the content
window.addEventListener('load', () => {
    // Delay to simulate loading time
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none'; // Hide preloader
       /* document.querySelector('.main-content').style.display = 'block'; // Show main content*/

        window.location.href = 'content.html'; // Redirect to the file

    }, 3000); // Set delay in milliseconds (3 seconds)
});