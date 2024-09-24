window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 40) {
        header.classList.add('backdrop-blur-lg');
        header.classList.remove('bg-gray-100'); 
    } else {
        header.classList.remove('backdrop-blur-lg');
        header.classList.add('bg-gray-100'); 
    }
});
