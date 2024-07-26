// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Thank you for reaching out!');
// });
// gsap.from("section", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.5,
//     ease: "power2.out"
// });

// const projectImages = document.querySelectorAll(".project img");

// projectImages.forEach(img => {
//     img.addEventListener("mouseenter", () => {
//         gsap.to(img, { scale: 1.1, duration: 0.3 });
//     });
//     img.addEventListener("mouseleave", () => {
//         gsap.to(img, { scale: 1, duration: 0.3 });
//     });
// });
// const controller = new ScrollMagic.Controller();

// document.querySelectorAll('section').forEach((section, index) => {
//     new ScrollMagic.Scene({
//         triggerElement: section,
//         triggerHook: 0.9,
//         duration: '80%', 
//         offset: 50 
//     })
//     .setTween(gsap.from(section, { y: 50, opacity: 0, duration: 1 }))
//     .addTo(controller);
// });

// anime({
//     targets: 'section',
//     opacity: [0, 1],
//     translateY: [50, 0],
//     delay: anime.stagger(200), 
//     duration: 1000,
//     easing: 'easeOutQuad'
// });

// document.querySelectorAll('.project img').forEach(img => {
//     img.addEventListener('mouseenter', () => {
//         anime({
//             targets: img,
//             scale: 1.1,
//             duration: 300,
//             easing: 'easeInOutQuad'
//         });
//     });
//     img.addEventListener('mouseleave', () => {
//         anime({
//             targets: img,
//             scale: 1,
//             duration: 300,
//             easing: 'easeInOutQuad'
//         });
//     });
// });












// new start
