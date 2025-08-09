professionalValues = [
    {
        id: 1,
        svgIcon: "images/self-reliance-icon.svg",
        name: "Self-Reliance",
        description: "Empowering individuals to grow through skill and effort."
    },
    {
        id: 2,
        svgIcon: "images/trust-icon.svg",
        name: "Trust & Integrity",
        description: "Honest work that builds respect and lasting relationships."
    },
    {
        id: 3,
        svgIcon: "images/growth-icon.svg",
        name: "Community Groth",
        description: "Supporting locals to strengthen and uplift our neighborhood."
    }
]

services = [
    {
        id:1,
        imageSrc: "images/electricians-800-530.webp",
        name: "Electricians"
    },
    {
        id:2,
        imageSrc: "images/painters-800-530.webp",
        name: "Painters"
    },
    {
        id:3,
        imageSrc: "images/taxi-drivers-800-530.webp",
        name: "Taxi Drivers"
    },
]

function createValueCard(profesionalValue){
    const valueListDiv = document.getElementById("value-list")
    const valueCardDiv = document.createElement("div");
    valueCardDiv.classList.add("card")
    const svgIcon = document.createElement("img");
    svgIcon.setAttribute("alt",`${profesionalValue.name} Icon`);
    svgIcon.setAttribute("src",profesionalValue.svgIcon);
    svgIcon.setAttribute("width",96);
    svgIcon.setAttribute("loading","lazy");
    const title = document.createElement("h3");
    title.textContent = profesionalValue.name;
    const description = document.createElement("p");
    description.textContent = profesionalValue.description;
    valueCardDiv.appendChild(svgIcon);
    valueCardDiv.appendChild(title);
    valueCardDiv.appendChild(description);
    valueListDiv.append(valueCardDiv);
}

function createServiceCard(service){
    const listDiv = document.getElementById("services-list")
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card")
    const img = document.createElement("img");
    img.setAttribute("alt",`${service.name} Card Image`);
    img.setAttribute("src",service.imageSrc);
    img.setAttribute("width",250);
    img.setAttribute("loading","lazy");
    const title = document.createElement("h3");
    title.textContent = service.name;
    const actionButton = document.createElement("button");
    actionButton.textContent = "Explore";
    actionButton.classList.add("service-button")

    actionButton.addEventListener('click', () => {
        window.location.href = "professionals.html";
        localStorage.setItem("service",service.name);
    });
    cardDiv.appendChild(img);
    cardDiv.appendChild(title);
    cardDiv.appendChild(actionButton);
    listDiv.append(cardDiv);


}

professionalValues.forEach(element => createValueCard(element));
services.forEach(service => createServiceCard(service));
