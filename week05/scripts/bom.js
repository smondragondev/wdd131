const input = document.querySelector('#favchap');
const button = document.querySelector('main button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach( (chapter) => displayList(chapter));

function displayList(chapter){
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');

    liElement.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    liElement.append(deleteButton);
    list.append(liElement);

    deleteButton.addEventListener('click', () => {
        list.removeChild(liElement);
        deleteChapter(liElement.textContent);
        input.focus();
    });
}

function setChapterList(){
    const stringList = JSON.stringify(chaptersArray);
    localStorage.setItem('chapters',stringList);
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length - 1);
    chaptersArray = chaptersArray.filter( (item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', () => {
    if (input.value.trim() === ''){
        alert("The input is empty!");
        input.focus();
        return
    }
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
});



