  const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 25300,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 20000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 20000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
];

const galleryGrid = document.querySelector('.gallery-grid');
const navLinks = document.querySelectorAll('nav a');

function getTempleYear(temple) {
  const year = new Date(temple.dedicated).getFullYear();
  return Number.isFinite(year) ? year : null;
}

const placeholderImage = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="400" height="250" fill="%23f4f4f4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23333333" font-family="Arial,sans-serif" font-size="22">Image unavailable</text></svg>';

function buildTempleCard(temple) {
  const templeCard = document.createElement('figure');

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', () => {
    image.src = placeholderImage;
  });

  const caption = document.createElement('figcaption');
  const title = document.createElement('h2');
  title.textContent = temple.templeName;
  const location = document.createElement('p');
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  const dedicated = document.createElement('p');
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  const area = document.createElement('p');
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

  caption.append(title, location, dedicated, area);
  templeCard.append(image, caption);
  return templeCard;
}

function displayTemples(templeList) {
  galleryGrid.innerHTML = '';
  templeList.forEach((temple) => {
    galleryGrid.appendChild(buildTempleCard(temple));
  });
}

function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter((temple) => {
        const year = getTempleYear(temple);
        return year !== null && year < 1900;
      });
    case 'new':
      return temples.filter((temple) => {
        const year = getTempleYear(temple);
        return year !== null && year > 2000;
      });
    case 'large':
      return temples.filter((temple) => temple.area > 90000);
    case 'small':
      return temples.filter((temple) => temple.area < 10000);
    case 'home':
    default:
      return temples;
  }
}

function handleNavClick(event) {
  event.preventDefault();
  const filter = event.currentTarget.dataset.filter;
  const filteredTemples = filterTemples(filter);
  displayTemples(filteredTemples);
}

navLinks.forEach((link) => {
  link.addEventListener('click', handleNavClick);
});

displayTemples(temples);

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;