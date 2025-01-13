import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const userNameElem = document.getElementById('user-name');
    const userEmailElem = document.getElementById('user-email');
    const btnTheme = document.getElementById('btnTheme');
    const body = document.body;

    // Initialize Firebase Authentication
    const auth = getAuth();

    // Check Authentication State
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User detected:', user); // Debug: Check user object

            // Display user data
            userNameElem.textContent = user.displayName || user.uid || 'Anonymous User';
            userEmailElem.textContent = user.email || 'N/A';
        } else {
            console.error('No user is logged in'); // Debug: Check if no user is logged in
            alert('No user is logged in. Redirecting to login page...');
            window.location.href = 'login.html';
        }
    });

    // Dark Mode Toggle
    // Load saved theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    // Toggle theme on button click
    btnTheme.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        localStorage.setItem('theme', theme);
    });
});
