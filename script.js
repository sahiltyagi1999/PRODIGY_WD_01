// Get the navigation menu element
const nav = document.getElementById('main-nav');

// Function to change the navigation menu style on scroll
function changeNavStyleOnScroll() {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = '#555';
    } else {
        nav.style.backgroundColor = '#333';
    }
}

// Event listener for scrolling
window.addEventListener('scroll', changeNavStyleOnScroll);

// Function to change menu item style on hover
function changeMenuItemStyle(e) {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#ff4500'; // Change color on hover
    }
}

// Event listener for menu item hover
nav.addEventListener('mouseover', changeMenuItemStyle);

// Reset menu item style when mouse leaves
nav.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A') {
        e.target.style.color = '#fff'; // Reset color when mouse leaves
    }
});
