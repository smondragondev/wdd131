function saveName(name){
    localStorage.setItem("contact-name",name);
}

document.querySelector("form").addEventListener('submit', ()=>{
    const nameInput = document.getElementById("user-name");
    const name = nameInput.value;
    saveName(name);
})