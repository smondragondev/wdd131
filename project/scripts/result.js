function loadContactName(){
    const spanElem = document.getElementById("name");
    const userName = localStorage.getItem("contact-name");
    spanElem.textContent = userName;
}

loadContactName();