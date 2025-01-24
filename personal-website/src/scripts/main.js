document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const homeSection = document.querySelector('#home');
    const aboutSection = document.querySelector('#about');
    const contactSection = document.querySelector('#contact');
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    const navHeight = nav.offsetHeight; 

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

         
            nav.classList.remove('hidden');

          
            if (window.innerWidth <= 768) {
                navUl.classList.remove('show');
            }
        });
    });


    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

   
        if (scrollPosition >= aboutSection.offsetTop - navHeight) {
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden');
        }

    
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

    
        const contactTop = contactSection.offsetTop - navHeight - 50;
        const contactHeight = contactSection.clientHeight;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight >= contactTop + contactHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                }
            });
        }
    });

 
    nav.classList.add('hidden');


    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    setInterval(moveCarousel, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.querySelector('.top-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            topNav.classList.add('hidden');
        } else {
            topNav.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});