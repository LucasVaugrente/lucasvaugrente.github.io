const body = document.querySelector('body');
const rocket = document.querySelector('.svg_rocket');

const maxLeft = window.innerWidth - rocket.offsetWidth - 30;
const maxTop = window.innerHeight - rocket.offsetHeight - 30;

const starsNumber = 70;
let scroll_count = 0;
const lineHeader = 10;
const lineFooter = 90;

// Stars generation (random positions)
for (let i = 0; i < starsNumber; i++) {
    const star = document.createElement('div');
    star.classList.add('mini-star');
    star.style.left = Math.random() * 98 + 'vw';
    star.style.top = Math.random() * document.documentElement.scrollHeight + 'px';

    const widthANDheight = Math.random() * 5 + 1;
    star.style.width = widthANDheight + 'px';
    star.style.height = widthANDheight + 'px';

    body.appendChild(star);
}

let stars = document.querySelectorAll('.mini-star');
for (let index = 0; index < 20; index++) {
    let star = stars[Math.floor(Math.random() * stars.length)];
    star.style.animation = "twinkle 3s ease-in-out infinite";
}

document.addEventListener("scroll", function () {
    const scrollPercentage = getScrollPercentage();

    const newLeft = (scrollPercentage / 100) * maxLeft;
    const newTop = (scrollPercentage / 100) * maxTop;

    // Vérification du sens du scroll
    if (scrollPercentage > scroll_count) {
        if (scrollPercentage < lineHeader) {
            // Animation personnalisée Header
            console.log("Header");
        }
    
        if (scrollPercentage > lineHeader && scrollPercentage < lineFooter) {
            // Animation en "zigzag" tout en au long de la page
            console.log("Body");
        } 

        if(scrollPercentage > lineFooter) {
            // Animation personnalisée Footer
            console.log("Footer");
        }
    } 
    else {
        if (scrollPercentage < lineHeader) {
            // Animation personnalisée Header
            console.log("Header");
        }
    
        if (scrollPercentage > lineHeader && scrollPercentage < lineFooter) {
            // Animation en "zigzag" tout en au long de la page
            console.log("Body");
        } 

        if(scrollPercentage > lineFooter) {
            // Animation personnalisée Footer
            console.log("Footer");
        }
    }

    // rocket.style.left = newLeft + 'px';
    // rocket.style.top = newTop + 'px';

    scroll_count = scrollPercentage;
});

/**
 * 
 * @summary Retourne le pourcentage de défilement
 * @returns {number} Le pourcentage de défilement
 *
 */
function getScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );

    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    return scrollPercent * 100;
}

/**
 * 
 * @summary Met à jour les frames de la fusée lorsqu'on scroll
 * 
 */ 
function updateFrames() {}