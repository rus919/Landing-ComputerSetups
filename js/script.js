const CountDownDate = new Date("Mar 22, 2022 18:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

const CurrentDay = new Date().getTime();
const distance = CountDownDate - CurrentDay;
    
// Time calculations for days, hours, minutes and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 250,
})


sr.reveal('.header-nav', {delay: 100})
sr.reveal('.header-mid, .start-top, .start-subtitle, .advantages-title, .partners-top, .our-program-header, .teachers-top, .footer')
sr.reveal('.about-left, .start-bottom, .our-program-timeline', {origin: 'left'})
sr.reveal('.about-right, .teacher', {origin: 'right'}, {delay: 300})
sr.reveal('.advantages-card', {interval: 250})
sr.reveal('.partners-item-top, .partners-item-bottom', { interval: 100 })
sr.reveal('.header-nav')



//hamburger

const mainNav = document.querySelector('.mobile-wrapper-nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
})