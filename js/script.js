///////////////////////////////////////////////////////////
// Dynamically setting current year on the website

const  yearEl= document.querySelector(".currentYear"); 
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

// MAKE MOBILE NAVIGATION WORK

const mobileMenu = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

mobileMenu.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
})

// FIXING SMOOTH SCROLL ON SAFARI BROWSERS

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href')
        // console.log(href)
        
        // scroll to top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        // close mobile navigation
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    })
})


// Adding the sticky class to the navigation
const sectionHero = document.querySelector(".section-hero");
const theObserver = new IntersectionObserver((entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting ) {
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }
 }, {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});
theObserver.observe(sectionHero);



// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  





  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
  
  /*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */

//   Trying out my JavaScript skills

// const h1 = document.querySelector('.heading-primary');

// h1.addEventListener('click', () => {
//     h1.textContent = 'Software Dev';
//     h1.style.backgroundColor = 'orangered';
//     h1.style.padding = '5rem';
// })