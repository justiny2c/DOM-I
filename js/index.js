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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', "img/logo.png");

let contentImage = document.getElementById("cta-img");
contentImage.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navItems = document.querySelectorAll("nav a");
// nav_items[0].textContent = siteContent["nav"]["nav-item-1"]
// nav_items[1].textContent = "Product";
// nav_items[2].textContent ="Vision";
// nav_items[3].textContent = "Features";
// nav_items[4].textContent ="About";
// nav_items[5].textContent ="Contact";

navItems.forEach((each,i) => {
  each.textContent = siteContent["nav"][`nav-item-${i+1}`];
  each.style.color = "green"
});


let headerText = document.querySelector("h1");
headerText.textContent = "DOM Is Awesome"

let button = document.querySelector("button");
button.textContent =  "Get Started"

let contentHeaders = document.querySelectorAll("h4");
contentHeaders[0].textContent = "Features";
contentHeaders[1].textContent = "About";
contentHeaders[2].textContent = "Services";
contentHeaders[3].textContent = "Products";
contentHeaders[4].textContent = "Vision";
contentHeaders[5].textContent = "Contact";

let paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[5].textContent = "123 Way 456 Street Somewhere, USA";
paragraphs[6].textContent = "1 (888) 888-8888";
paragraphs[7].textContent = "sales@greatidea.io";
paragraphs[8].textContent = "Copyright Great Idea! 2018";

const newLink = document.createElement("a");
newLink.href = "#"

const nav = document.querySelector("nav");

newLink.textContent = "Careers";
newLink.style.color = "Red"

nav.appendChild(newLink);

const newText = document.createElement("p");
newText.textContent = "EUREKA!"
nav.prepend(newText);

newText.style.fontFamily = "Bangers"
newText.style.fontSize = "30px"

nav.style.alignItems = "center";

