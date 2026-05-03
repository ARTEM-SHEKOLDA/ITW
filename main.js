document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    
    menuIcon.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });
    
    closeMenuBtn.addEventListener('click', function() {
        sidebarMenu.classList.remove('active');
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!sidebarMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebarMenu.classList.remove('active');
        }
    });
    
    const coachingBtn = document.querySelector('.btn-coaching');
    if (coachingBtn) {
        coachingBtn.addEventListener('click', function() {
            const footer = document.getElementById('footer');
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const projectsBtn = document.querySelector('.btn-projects');
    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            const projectSection = document.getElementById('my-project-section');
            projectSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
