// Typing animation effect
var typed = new Typed(".effect",{
    strings:[ "Developer","Blogger", "Designer" ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' });
    });
});
