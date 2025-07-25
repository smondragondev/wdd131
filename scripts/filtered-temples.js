const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


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
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
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
		templeName: "Trujillo Perú",
		location: "Trujillo, Perú",
		dedicated: "2015, June, 21",
		area: 28200,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/400x250/trujillo-peru-temple-exterior-1449769-wallpaper.jpg"
	},
	{
		templeName: "Arequipa Perú",
		location: "Arequipa, Perú",
		dedicated: "2019, December, 15",
		area: 2669,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
	},
	{
		templeName: "Albuquerque New Mexico",
		location: "Albuquerque, New Mexico",
		dedicated: "2000, March, 5",
		area: 34245,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-998219-wallpaper.jpg"
	},
];


function createCard(temple) {
	return `<div>
				<h3>${temple.templeName}</h3>
				<p><span>Location:</span> ${temple.location}</p>
				<p><span>Dedicated:</span> ${temple.dedicated}</p>
				<p><span>Size:</span> ${temple.area} sq ft</p>
			</div>
            <img src="${temple.imageUrl}" alt="A beautiful temple located in ${temple.location}" loading="lazy" width="320" height="200">`
}
function displayTemples(temples) {
	const templeListDiv = document.getElementById("temple-list");
	templeListDiv.innerHTML = '';
	const cardImages = temples.map((temple) => createCard(temple));
	cardImages.forEach(element => {
		const newElement = document.createElement('figure');
		newElement.innerHTML = element;
		templeListDiv.append(newElement);
	});
}

displayTemples(temples);

// By default

document.getElementById("home").addEventListener('click',
	() => displayTemples(temples));

// Temples built before 1900
document.getElementById("old-temples").addEventListener('click', () => {
	const filteredTemples = temples.filter((temple) => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year < 1900;
	});
	displayTemples(filteredTemples);
})

// New – temples built after 2000
document.getElementById("new-temples").addEventListener('click', () => {
	const filteredTemples = temples.filter((temple) => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year > 2000;
	})
	displayTemples(filteredTemples);
});

// Large – temples larger than 90,000 square feet
document.getElementById("large-temples").addEventListener('click', () => {
	const filteredTemples = temples.filter((temple) => temple.area > 90000);
	displayTemples(filteredTemples);
});

// Small – temples smaller than 10,000 square feet
document.getElementById("small-temples").addEventListener('click', () => {
	const filteredTemples = temples.filter((temple)=> temple.area < 10000);
	displayTemples(filteredTemples);
});