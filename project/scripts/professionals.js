services = [
    {
        id: 0,
        name: "All"
    },
    {
        id: 1,
        name: "Electricians"
    },
    {
        id: 2,
        name: "Painters"
    },
    {
        id: 3,
        name: "Taxi Drivers"
    },
]

professionals = [
    {
        id: 1,
        imageSrc: "images/carlos-brenis-400-400.webp",
        name: "Carlos Brenis",
        phone: "+51 945123422",
        service: "Painters",
        description: "Painter with more than 20 years of experience. Specializes in residential and commercial projects, delivering high-quality finishes and attention to detail. Reliable, punctual, and customer-focused."
    },
    {
        id: 2,
        imageSrc: "images/napoleon-400-400.webp",
        name: "Napoleon Monteza",
        phone: "+51 945123422",
        service: "Electricians",
        description: "Electrician with over 15 years of experience. Expert in wiring, repairs, and installations. Known for safety, efficiency, and excellent troubleshooting skills. Trusted by many satisfied clients."
    },
    {
        id: 3,
        imageSrc: "images/jhon-zavaleta-400-400.webp",
        name: "Jhon Zavaleta",
        phone: "+51 945123422",
        service: "Taxi Drivers",
        description: "Taxi driver with 5+ years of experience. Provides safe, comfortable rides. Friendly, punctual, and knowledgeable about city routes. Committed to excellent customer service."
    },
    {
        id: 4,
        imageSrc: "images/eliberto-sanchez-400-400.webp",
        name: "Eliberto Sanchez",
        phone: "+51 945123422",
        service: "Taxi Drivers",
        description: "Taxi driver with 30 years of experience. Reliable, courteous, and familiar with all city areas. Ensures timely arrivals and a pleasant travel experience for every passenger. Always professional."
    },
]

function createServiceFilter(service) {
    const serviceList = document.getElementById("available-services");
    const serviceLi = document.createElement("li");
    const serviceFilter = document.createElement("a");
    serviceFilter.innerText = service.name;
    serviceFilter.id = `service-${service.name}`
    serviceFilter.addEventListener("click", () => filterByService(service.name));

    serviceLi.appendChild(serviceFilter);
    serviceList.appendChild(serviceLi);
}

function createProfessionalCard(professional) {
    const listDiv = document.getElementById("professionals-list")
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card")
    const img = document.createElement("img");
    img.setAttribute("alt", `${professional.name} Card Image`);
    img.setAttribute("src", professional.imageSrc);
    img.setAttribute("width", 150);
    img.setAttribute("loading", "lazy");
    const title = document.createElement("h3");
    title.textContent = professional.name;
    const paragraph = document.createElement("p");
    paragraph.textContent = professional.description;
    const actionButton = document.createElement("a");
    actionButton.textContent = "Contact them";
    actionButton.href = `tel:${professional.phone}`
    actionButton.classList.add("professional-button")
    // Div for phone
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");
    const phoneP = document.createElement("p");
    phoneP.textContent = professional.phone;
    const svgIcon = document.createElement("img");
    svgIcon.src = "images/phone-icon.svg";
    svgIcon.setAttribute("alt", "Phone icon");
    svgIcon.setAttribute("width", "24");
    phoneDiv.appendChild(phoneP);
    phoneDiv.appendChild(svgIcon);

    cardDiv.appendChild(img);
    cardDiv.appendChild(title);
    cardDiv.appendChild(paragraph);
    cardDiv.appendChild(phoneDiv);
    cardDiv.appendChild(actionButton);
    listDiv.append(cardDiv);
}

function selectService(serviceName){

    const selectedService = document.querySelector(".service-selected");
    if (selectedService){
        selectedService.classList.remove("service-selected");
    }
    const serviceToSelect = document.getElementById(`service-${serviceName}`)
    serviceToSelect.classList.add("service-selected");
}

function filterByService(serviceName) {
    let filteredProfessionals = professionals;
    if (serviceName !== "All") {
        filteredProfessionals = professionals.filter(
            (professional) => professional.service === serviceName);
    }
    const listDiv = document.getElementById("professionals-list")
    listDiv.innerHTML = "";
    filteredProfessionals.forEach(professional => createProfessionalCard(professional));
    localStorage.setItem("service",serviceName);
    selectService(serviceName);
}

function preloadProfessionalsByService() {
    const selectedService = localStorage.getItem("service");
    if (selectedService) {
        filterByService(selectedService);
    } else {
        filterByService("All");
    }
}

services.forEach(service => createServiceFilter(service));
preloadProfessionalsByService();