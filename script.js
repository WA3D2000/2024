const menuContainer = document.querySelector('.menu-container');
const menuItems = [
    { imageSrc: 'menue-7.jpg', title: 'macron' },
    { imageSrc: 'img-2.jpg', title: 'cookies' },
    { imageSrc: 'menue-1.jpg', title: 'choclate dunates' },
    { imageSrc: 'menue-2.jpg', title: 'purple macron' },
    { imageSrc: 'menue-3.jpg', title: 'pink dunats' },
    { imageSrc: 'menue-4.jpg', title: 'prownies' },
    { imageSrc: 'menue-5.jpg', title: 'prownies' },
    { imageSrc: 'menue-6.jpg', title: 'pan-cake' },
    { imageSrc: 'menue-7.jpg', title: 'macron' }
];

menuItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item';

    const img = document.createElement('img');
    img.src = item.imageSrc;
    menuItemDiv.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = item.title;
    menuItemDiv.appendChild(title);

    const button = document.createElement('button');
    button.textContent = 'order';
    menuItemDiv.appendChild(button);

    menuContainer.appendChild(menuItemDiv);
});
