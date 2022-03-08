const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
//Dom element site content 

const mainContentSelector = document.querySelector(".main-content")
const contactSelector = document.querySelector(".contact")
const navSelector = document.querySelector(".nav")
const footerSelector = document.querySelector(".footer")
const imagesSelector = document.querySelector('.images')

//logo image
const logoImageSelector = document.querySelector("#logo-img")
logoImageSelector.src = siteContent.images['logo-img']

//update ctaImage
const ctaImageSelector = document.querySelector('#cta-img')
ctaImageSelector.src = siteContent.images['cta-img']
//update middleImage

const accentImageSelector = document.querySelector('#middle-img')
accentImageSelector.src = siteContent.images['accent-img']

//update nav
/*const navSelectorLink = document.querySelectorAll("nav a")
navSelectorLink[0].textContent = siteContent["nav"]["nav-item-1"]
navSelectorLink[1].textContent = siteContent["nav"]["nav-item-2"]
navSelectorLink[2].textContent = siteContent["nav"]["nav-item-3"]
navSelectorLink[3].textContent = siteContent["nav"]["nav-item-4"]
navSelectorLink[4].textContent = siteContent["nav"]["nav-item-5"]
navSelectorLink[5].textContent = siteContent["nav"]["nav-item-6"]
*/
const navLinks = document.querySelectorAll('header nav a')
const navSelectorLink1 = Object.values(siteContent.nav)
navLinks.forEach((link,idx)=> {
  link.textContent = navSelectorLink1[idx]
link.classList.add('italic')
}
)

//update Header 
const ctaSelectorH1 = document.querySelector("h1");
ctaSelectorH1.textContent = siteContent["cta"]["h1"]
//update btn 
const ctaSelectorBtn = document.querySelector("button");
ctaSelectorBtn.textContent = siteContent["cta"]["button"]


//update main-content
const mainContentSelectorF = document.querySelectorAll(" div h4")
mainContentSelectorF[0].textContent = siteContent["main-content"]["features-h4"]
mainContentSelectorF[1].textContent = siteContent["main-content"]["about-h4"]
mainContentSelectorF[2].textContent = siteContent["main-content"]["services-h4"]
mainContentSelectorF[3].textContent = siteContent["main-content"]["product-h4"]
mainContentSelectorF[4].textContent = siteContent["main-content"]["vision-h4"]


const mainContentSelectorP = document.querySelectorAll("p")
mainContentSelectorP[0].textContent= siteContent["main-content"]["features-content"] 
mainContentSelectorP[1].textContent= siteContent["main-content"]["about-content"]
mainContentSelectorP[2].textContent= siteContent["main-content"]["services-content"]  
mainContentSelectorP[3].textContent= siteContent["main-content"]["product-content"] 
mainContentSelectorP[4].textContent= siteContent["main-content"]["vision-content"] 

//update Contact

const contactSelectorH4 = document.querySelector("section.contact")
contactSelectorH4.children[0].textContent = siteContent.contact["contact-h4"]
contactSelectorH4.children[1].textContent = siteContent.contact['address']
contactSelectorH4.children[2].textContent= siteContent.contact['phone']
contactSelectorH4.children[3].textContent = siteContent.contact['email']

//const contactSelectorP = document.querySelectorAll("section.contact")
//contactSelectorP.children[1] = siteContent.contact["address"]

//update footer

const footerSelectorA = document.querySelector("footer a")
footerSelectorA.textContent = siteContent["footer"]["copyright"]
footerSelectorA.classList.add('bold')