const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const searchContainer = document.querySelector('.search-container');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    searchContainer.classList.toggle('sidebar-hidden');

    // Update button text based on sidebar visibility
    toggleSidebarBtn.textContent = sidebar.classList.contains('hidden') 
        ? 'Show Filters' 
        : 'Hide Filters';
});
