const dotCount = 500; // Number of dots
const container = document.getElementById('dotContainer');

// Dynamically create dot wrappers and dots
for (let i = 1; i <= dotCount; i++) {
    const dotWrapper = document.createElement('div');
    dotWrapper.classList.add('dotWrapper');
    dotWrapper.style.top = `${Math.random() * 96}%`; // Random vertical positioning
    dotWrapper.style.left = `${Math.random() * 96}%`; // Random horizontal positioning
    dotWrapper.style.animation = `flying ${20 + Math.random() * 30}s ease-in-out infinite alternate`;

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.transformOrigin = `${Math.random() * 20 - 10}px ${Math.random() * 20 - 10}px`; // Random origin for rotation
    dot.style.animation = `rotating ${15 + Math.random() * 20}s ease-in-out infinite`;



    dotWrapper.appendChild(dot);
    container.appendChild(dotWrapper);
}
