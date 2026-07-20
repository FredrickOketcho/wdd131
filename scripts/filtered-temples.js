const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { templeName: "Salt Lake City Utah", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 40000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg" },
  { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980, October, 27", area: 5290, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg" }
];

const gallery = document.querySelector(".gallery-grid");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#main-nav");

function templeYear(temple) {
  return Number(temple.dedicated.slice(0, 4));
}

function addDetail(caption, label, value) {
  const detail = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = `${label}: `;
  detail.append(strong, value);
  caption.append(detail);
}

function createTempleCard(temple) {
  const card = document.createElement("figure");
  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = "lazy";
  image.width = 400;
  image.height = 250;

  const caption = document.createElement("figcaption");
  const name = document.createElement("h2");
  name.textContent = temple.templeName;
  caption.append(name);
  addDetail(caption, "Location", temple.location);
  addDetail(caption, "Dedicated", temple.dedicated);
  addDetail(caption, "Area", `${temple.area.toLocaleString()} sq ft`);
  card.append(image, caption);
  return card;
}

function displayTemples(list) {
  gallery.replaceChildren(...list.map(createTempleCard));
}

function filteredTemples(filter) {
  const filters = {
    old: temple => templeYear(temple) < 1900,
    new: temple => templeYear(temple) > 2000,
    large: temple => temple.area > 90000,
    small: temple => temple.area < 10000
  };
  return filters[filter] ? temples.filter(filters[filter]) : temples;
}

navigation.addEventListener("click", event => {
  const link = event.target.closest("a[data-filter]");
  if (!link) return;
  event.preventDefault();
  displayTemples(filteredTemples(link.dataset.filter));
  navigation.classList.remove("open");
  menuButton.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

displayTemples(temples);
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
