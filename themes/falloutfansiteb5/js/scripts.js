document.addEventListener('DOMContentLoaded', function(){
    
    /* ajouter la classe "active" aux liens de la navigation navbar */
    const navbarLinks = document.querySelectorAll('.navbar .nav-link:not(.dropdown-toggle)');
    navbarLinks.forEach(link =>{
        if(link.classList.contains('is-active')){
            link.classList.add('active');
        }
    });
});