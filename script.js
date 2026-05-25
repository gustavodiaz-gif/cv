document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const printBtn = document.getElementById('printBtn');
    const body = document.body;

    // Load saved theme preference, defaulting to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    body.className = savedTheme;

    // Theme toggler click event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
            } else {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            }
        });
    }

    // Print button click event
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Add entry animation trigger if needed, or logs for verification
    console.log("CV interactivo de Gustavo David Diaz Maldonado cargado con éxito.");
});
