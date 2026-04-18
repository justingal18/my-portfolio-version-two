import { createElement, createInputField } from "./utilfunction.js";

const main = createElement('main', {
    id: 'main-banner',
    classList: ['main-banner'],
});

const headerSection = createElement('header', {
    id: 'header-section',
    classList: ['header-section', 'headerContainer'], // Added 'headerContainer' for potential future styling
});

const companyName = createElement('h1', {
    id: 'company-name',
    classList: ['company-name'],
    textContent: 'Justin Portfolio',
});

const navSection = createElement('nav', {
    id: 'nav-section',
    classList: ['nav-section'],
});

const unorderedList = createElement('ul', {
    id: 'nav-list',
    classList: ['nav-list'],
});

const items = [
    {key: 'home', label: 'Home', icon: 'home'}, 
    {key: 'about', label: 'About', icon: 'person'}, 
    {key: 'projects', label: 'Projects', icon: 'folder'}, 
    {key: 'contact', label: 'Contact', icon: 'email'}
]; // Placeholder for nav items

items.forEach((text, index) => {
    const icon = createElement('img', {
        id: `${text.key} Icon`,
        classList: `${text.key}-icon`,
        'icon.classList': ["material-icons"],
        'icon.textContent': text.icon,
    });

    const listItem = createElement('li', {
        id: `listItem-${index}`,
        classList: ['nav-item'],
    });

    const navText = createElement('p', {
        id: `${text.key}-nav`,
        classList: ['nav-text'],
    });

    const itemLink = createElement('a', {
        classList: ['menu'],
        href: `#${text.key}`,
        target: '_blank',
        textContent: text.label,
    });

    const navLine = createElement('span', {
        classList: ['nav-line'],
    });

    itemLink.style.textDecoration = 'none';
    itemLink.style.color = 'white';
    listItem.style.listStyleType = 'none';

    unorderedList.append(listItem);
    listItem.append(navText);
    navText.append(itemLink, navLine);
    itemLink.append(icon);
});

const ctnBtn = createElement('button', {
    id: 'contact-btn',
    classList: ['contact-btn'],
    textContent: 'Contact Me',
});

const heroBanner = createElement('section', {
    id: 'hero-banner',
    classList: ['hero-banner'],
});

// Right Hero Banner
const rightHeroBanner = createElement('section', {
    id: 'right-hero-banner',
    classList: ['right-hero-banner'],
});

const contentContainer = createElement('section', {
    id: 'content-container',
    classList: ['content-container'],
});

const firstLayer = createElement('section', {
    id: 'first-layer',
    classList: ['first-layer'],
});

const firstLayerFirstContent = createElement('section', {
    id: 'first-layer-first-content',
    classList: ['first-layer-first-content'],
});

const firstLeftLayerImage = createElement('img', {
    src: 'src/img/pexels-yankrukov-8837730.jpg',
    alt: 'Collaboration'
});

const firstLayerSecondContent = createElement('section', {
    id: 'first-layer-second-content',
    classList: ['first-layer-second-content'],
});

const firstImageContainer = createElement('section', {
    id: 'first-image-container',
    classList: ['first-image-container', 'slide', 'active'],
});

const firstLayerRightFirstImage = createElement('img', {
    src: 'src/img/pexels-uncoveredlens-3620354.jpg',
    alt: 'First Image'
});

const secondImageContainer = createElement('section', {
    id: 'second-image-container',
    classList: ['second-image-container', 'slide'],
});

const firstLayerRightSecondImage = createElement('img', {
    src: 'src/img/pexels-badesaba-29459965.jpg',
    alt: 'Second Image'
});

const thirdImageContainer = createElement('section', {
    id: 'third-image-container',
    classList: ['third-image-container', 'slide'],
});

const firstLayerRightThirdImage = createElement('img', {
    src: 'src/img/pexels-furkanelveren-18410687.jpg',
    alt: 'Third Image'
});

const dot = [];
for (let i = 1; i <= 3; i++) {
    const dotSpan = createElement('span', {
        id: `dot-${i}`,
        classList: [`dot-${i}`, 'dot']
    });

    if (i === 1) {
        dotSpan.onclick = () => goToSlide(0);
    } else if (i === 2) {
        dotSpan.onclick = () => goToSlide(1);
    } else if (i === 3) {
        dotSpan.onclick = () => goToSlide(2);
    }
    

    dot.push(dotSpan);
};

const dotPagination = createElement('section', {
    id: 'dot-pagination',
    classList: ['dot-pagination', 'active'],
});


const secondLayer = createElement('section', {
    id: 'second-layer',
    classList: ['second-layer'],
});

const secondLayerFirstContent = createElement('section', {
    id: 'second-layer-first-content',
    classList: ['second-layer-first-content'],
});

const secondLayerSecondContent = createElement('section', {
    id: 'second-layer-second-content',
    classList: ['second-layer-second-content'],
});

// Left Hero Banner
const leftHeroBanner = createElement('section', {
    id: 'left-hero-banner',
    classList: ['left-hero-banner'],
});

const heroHeading = createElement('h2', {
    id: 'hero-heading',
    classList: ['hero-heading'],
    textContent: 'Hi, I\'m a Web Developer',
});

const subHeading = createElement('p', {
    id: 'sub-heading',
    classList: ['sub-heading'],
    textContent: 'I create a responsive and user-friendly websites.',
});

const availableStatusContainer = createElement('section', {
    id: 'available-status-container',
    classList: ['available-status-container'], 
});

const availableStatusIcon = createElement('span', {
    id: 'available-status-icon',
    classList: ['available-status-icon', 'material-icons'],
});

const availableStatus = createElement('p', {
    id: 'available-status',
    classList: ['available-status'],
    textContent: 'Available'
});

const goDownIcon = createElement('span', {
    id: 'go-down-icon',
    classList: ['go-down-icon', 'material-icons'],
    textContent: 'arrow_downward',
});

goDownIcon.addEventListener('click', () => {
    const scrollTarget = document.getElementById('go-down-icon');

    scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

// About Me Section (Kindly use tailwind for setting up its design)

const aboutMe = createElement('section', {
    id: 'about-me',
    classList: ['about-me', 'about-me-section']
});

// Append sections to the body and to its respective parent sections

// Header Section
document.body.append(main);
main.append(headerSection, heroBanner, aboutMe);

// Navigation Section
headerSection.append(companyName, navSection, ctnBtn);
navSection.append(unorderedList);


// Hero Banner
heroBanner.append(leftHeroBanner, rightHeroBanner);

// Left Hero Banner
leftHeroBanner.append(availableStatusContainer, heroHeading, subHeading, goDownIcon);
availableStatusContainer.append(availableStatusIcon, availableStatus);

// Right Hero Banner
rightHeroBanner.append(contentContainer);

contentContainer.append(firstLayer, secondLayer);

firstLayer.append(firstLayerFirstContent, firstLayerSecondContent);

firstLayerFirstContent.append(firstLeftLayerImage)

firstLayerSecondContent.append(firstImageContainer, secondImageContainer, thirdImageContainer, dotPagination);

firstImageContainer.append(firstLayerRightFirstImage);
secondImageContainer.append(firstLayerRightSecondImage);
thirdImageContainer.append(firstLayerRightThirdImage);

dotPagination.append(...dot);

secondLayer.append(secondLayerFirstContent, secondLayerSecondContent);

// About me append section
aboutMe.append();

// Logic behind of Image Horizontal Slider
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot')

function showSlide(index) {
    if (index >= slides.length) { currentIndex = 0; }
    if (index < 0) { currentIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
};

function changeSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(() => changeSlide(1), 3000)

