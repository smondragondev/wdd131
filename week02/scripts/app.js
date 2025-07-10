const input = document.querySelector('#favchap');
const button = document.querySelector('main button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    console.log(input.value);
    if (input.value.trim() === ''){
        alert("The input is empty!");
        input.focus();
        return
    }
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');

    liElement.textContent = input.value;
    deleteButton.textContent = '❌';
    liElement.append(deleteButton);
    list.append(liElement);
    input.value = '';
    deleteButton.addEventListener('click', () => {
        list.removeChild(liElement);
        input.focus();
    });
});



