document.addEventListener("DOMContentLoaded", function () {
    const btnTheme = document.getElementById("btnTheme");
    const toggleIcon = document.getElementById("themeToggleIcon");
    const htmlElement = document.documentElement;

    // Ensure light mode is default if no theme is saved
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
        toggleIcon.style.transform = "translateX(24px)";
    } else {
        // Explicitly set to light mode by removing dark class
        htmlElement.classList.remove("dark");
        toggleIcon.style.transform = "translateX(0)";
        localStorage.setItem("theme", "light");
    }

    btnTheme.addEventListener("click", function () {
        // Toggle dark mode
        htmlElement.classList.toggle("dark");

        // Adjust toggle icon position
        if (htmlElement.classList.contains("dark")) {
            toggleIcon.style.transform = "translateX(24px)";
            localStorage.setItem("theme", "dark");
        } else {
            toggleIcon.style.transform = "translateX(0)";
            localStorage.setItem("theme", "light");
        }
    });
});