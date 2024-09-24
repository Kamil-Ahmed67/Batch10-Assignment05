window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
        header.classList.add('backdrop-blur-lg');
        navbar.classList.remove('bg-gray-100');
    } else {
        navbar.classList.remove('backdrop-blur-lg');
        navbar.classList.add('bg-gray-100');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('home-btn');
    if (homeButton) {
        homeButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = "./index.html";
        });
    }
});
