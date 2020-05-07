const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
///////////////////////////////////////////////////////////////////////////
//////////////////////// TOP CONTENT //////////////////////////////////////
let ctaText = document.getElementsByClassName('cta-text')[0]
console.log(ctaText)
ctaText.getElementsByTagName('h1')[0].innerHTML = siteContent.cta.h1
let btn = document.querySelector(".cta button");
btn.textContent = siteContent.cta.button;
///////////////////////////////////////////////////////////////////////////
///////////////////////// N A V ///////////////////////////////////////////
let navLinks = document.querySelectorAll('nav a')
console.log(navLinks)
navLinks.forEach(function(link, i){
  link.textContent = siteContent.nav[`nav-item-${i + 1}`]
})
///////////////////////////////////////////////////////////////////////////
////////////////////////// B O D Y ////////////////////////////////////////
let bodyH = document.querySelectorAll(".text-content h4");
let bodyP = document.querySelectorAll(".text-content p");
bodyH[0].textContent = siteContent["main-content"]["features-h4"];
bodyH[1].textContent = siteContent["main-content"]["about-h4"];
bodyH[2].textContent = siteContent["main-content"]["services-h4"];
bodyH[3].textContent = siteContent["main-content"]["product-h4"];
bodyH[4].textContent = siteContent["main-content"]["vision-h4"];
bodyP[0].textContent = siteContent["main-content"]["features-content"];
bodyP[1].textContent = siteContent["main-content"]["about-content"];
bodyP[2].textContent = siteContent["main-content"]["services-content"];
bodyP[3].textContent = siteContent["main-content"]["product-content"];
bodyP[4].textContent = siteContent["main-content"]["vision-content"];
///////////////////////////////////////////////////////////////////////////
////////////////////// CONTACT ////////////////////////////////////////////
contHead = document.querySelector(".contact h4");
contText = document.querySelectorAll(".contact p");
contHead.textContent = siteContent.contact["contact-h4"];
contText[0].textContent = siteContent.contact.address;
contText[1].textContent = siteContent.contact.phone;
contText[2].textContent = siteContent.contact.email;
contHead.style.color = 'green';
///////////////////////////////////////////////////////////////////////////
///////////////////////F O O T E R/////////////////////////////////////////
document.querySelector("footer p").textContent = siteContent.footer.copyright;
let footer = document.querySelector('footer p');
footer.addEventListener('click', (e) => e.target.style.background = 'red');
///////////////////////////////////////////////////////////////////////////
///////////////////////S T R E T C H///////////////////////////////////////
let newTag = document.createElement('a');
newTag.textContent = "Start";
let newTag2 = document.createElement('a');
newTag2.textContent = "Finish";
const newNavContent = document.querySelector('nav');
newNavContent.appendChild(newTag);
newNavContent.prepend(newTag2);

let navChange = document.querySelectorAll('a');
navChange.forEach(function(currentValue){
  currentValue.style.color = 'green';
});
// E N D //